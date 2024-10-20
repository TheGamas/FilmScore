import React from 'react';
import './styles/Activity.css';

const Activity = ({ activityName, date, description }) => {
    return (
        <div className="activity">
            <h2>{activityName}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};

export default Activity;