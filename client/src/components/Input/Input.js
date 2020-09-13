import React from 'react';

import './Input.css';

const Input = ({message, setMessage, sendMessage }) => (
  <form className='input-interface d-flex flex-row'>
    <input 
      id='textfield'
      className="input-box"
      type="text"
      placeholder="Connecting to the room..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}> Send </button>
  </form>
)

export default Input;