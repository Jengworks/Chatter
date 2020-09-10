import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentUser = false;
  
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      // by user
      <div className="messageContainer d-flex justify-content-end ">

        <p className="pr-2 sentBy align-self-center">{trimmedName}</p>

        <div className="user messageBox backgroundBlue">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) 
    : (
      // automatic server admin response
      <div className="messageContainer d-flex">

        <div className="others messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="pl-2 sentBy align-self-center">{user}</p>
      </div>
    )
  )
}

export default Message;