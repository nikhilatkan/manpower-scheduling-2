import React from 'react';
import './DepartmentCard.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const DepartmentCard = ({ title }) => {

    const navigate = useNavigate();

    const handleDepartmentClick = () => {
        navigate("/schedule-shift", { state: { title } });
    }

    return (
        <div onClick={handleDepartmentClick} className="department-card">
            <span className="department-card-title">{title}</span>
            <span className="department-card-arrow">→</span>
        </div>
    );
};

export default DepartmentCard;