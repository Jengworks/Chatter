// Using react hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="login-container d-flex flex-column">
      <h1 className="header d-flex justify-content-center"> Hurry up and join already! </h1>
      {/* username */}
      <input className="d-flex justify-content-center mt-3" placeholder="Username" type="text" onChange={(event) => setName(event.target.value)} />      
      {/* room id */}
      <input  className="d-flex justify-content-center mt-3" placeholder="Room Code" type="text" onChange={(event) => setRoom(event.target.value)} />
      {/* join button */}
      <Link className="button d-flex justify-content-center mt-3" onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button type="submit"> Sign In </button>
      </Link>
    </div>
  )
}

export default Join;