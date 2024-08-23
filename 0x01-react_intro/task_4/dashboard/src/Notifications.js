import React from 'react';
import './Notifications.css';
import logo from './close-image.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    const inlineStyle = {
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: 'inline-block',
            background: 'transparent',
            fontSize:'15px',
            cursor: 'pointer',
            border: 'none',
            wiidth: 'auto ',
    };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">
                <div
                dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}>
                </div>
                </li>
            </ul>
            <button type='button' aria-label='Close' onClick={handleClick} style={inlineStyle}>
                <img src={logo} alt='close-icon' style={{width: '10px', height: '10px'}} />
            </button>
        </div>
    );
}