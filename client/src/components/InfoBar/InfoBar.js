import React from 'react';

import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => (
  <div className="infoBar-container d-flex align-items-center">
    <img className='status onlineIcon' src={onlineIcon} alt='online' width='8' height='8' />
    <h3 className='room-number'> {room} </h3>
    <div className="exit ml-auto">
      <a href="/"><img src={closeIcon} alt='exit'/>  </a>
    </div>
  </div>
)
export default InfoBar;