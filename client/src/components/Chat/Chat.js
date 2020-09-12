import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://jengworks-chat-app.herokuapp.com/'

  useEffect(() => {
    // takes the browser's URL query params: e.g. ?name=jsmastery&room=room
    // and returns the param values
    const { name, room } = queryString.parse(location.search); 

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {
      
    });

    // unmount: d/c effect
    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [ENDPOINT, location.search]); // doing this tells useEffect to run only if these were changed

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
        setUsers(users);
        document.getElementsByClassName('loading-indicator')[0].style.display = "none";
        document.getElementsByClassName('chat-desc')[0].style.display = "block";
    });

}, []); // doing this tells useEffect to run only if messages were changed

  // function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    else{
      console.log("???");
    }
  }

  console.log(message, messages);

  return (
    <div className='chat-container d-flex justify-content-center'>
      <div className='chat-interface d-flex flex-column'>
        <InfoBar room={room}/>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <div className ='loading-indicator'>
        <h1> Connecting to the server
          <span>.</span>
        </h1>
      </div>
      <div className='chat-desc'>
        <TextContainer users={users}/>
      </div>
    </div>
  )
}

export default Chat