import React from 'react';
import './AssociateCard.css';

function AssociateCard({ associate }) {
    return (
        <div className="associate-card">
            <input type="checkbox" className="associate-checkbox" />
            <img src={associate.photo} alt={`${associate.name}'s photo`} className="associate-photo" />
            <span className="associate-name">{associate.name}</span>
            <span className="associate-number">{associate.number}</span>
            <span className='associate-emailId'>{associate.emailId}</span>
            <a href={associate.googleDriveLink} target="_blank" rel="noopener noreferrer" className="associate-link">
                Google Drive
            </a>
            <a href={associate.profileLink} target="_blank" rel="noopener noreferrer" className="associate-link">
                View Profile
            </a>
        </div>
    );
}

export default AssociateCard;
