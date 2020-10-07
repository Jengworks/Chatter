// Using react hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="login-container d-flex flex-column">
      <h1 className="header"> Join a room! </h1>
      <h2 className="desc"> 
        Username & Room Code can be anything! <br></br>
        Ex: "JohnSmithGuy" & "123" <br></br><br></br>
        It may take a bit to connect to the server due to periodic server idling. Read more <a href='https://github.com/Jengworks/React-Web-Chat-App' target='__blank' >here</a>.
      </h2>
      {/* username */}
      <input className="mt-3" placeholder="Username" type="text" onChange={(event) => setName(event.target.value)} />      
      {/* room id */}
      <input  className="mt-3" placeholder="Room Code" type="text" onChange={(event) => setRoom(event.target.value)} />
      {/* join button */}
      <Link className="button d-flex justify-content-center mt-3" onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button type="submit"> Join </button>
      </Link>
    </div>
  )
}

export default Join;