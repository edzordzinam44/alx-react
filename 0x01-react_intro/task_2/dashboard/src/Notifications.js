import React from 'react';
import './Notifications.css';
import getLatestNotification from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
	const handleClick = () = {
		console.log('Close button has been clicked');
	};

	const buttonStyle = {
		position: 'absolute',
		top: '10px',
		right: '10px',
		background: 'none',
		border: 'none',
		cursor: 'pointer'
	};

	const imgStyle = {
		width: '20px',
		height: '20px'
	};

	return (
		<div style={{ postion: 'relative', padding: '20px', border: '1px solid black' }}>
			<button
				style={buttonStyle}
				aria-label="Close"
				onClick={handleClick}
			>
				<img src={closeIcon} alt='close icon' style={imgStyle} />
			</button>

			<div className="Notifications">
				<p>Here is the list of notifications</p>
				<ul>
					<li data-priority="default">New course available</li>
					<li data-priority="urgent">New resume available</li>
					<li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
				</ul>
			</div>
		</div>
	);
}



export default Notifications;
