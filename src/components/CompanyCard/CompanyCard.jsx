import React from 'react'
import "./CompanyCard.css";
import { useNavigate } from 'react-router-dom';

function CompanyCard({ logo, companyName, description }) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/departments", { state: { companyName } });
    }

    return (
        <div className="card">
            <img className="logo" src={logo} alt={`${companyName} logo`} />
            <h2 className="company-name">{companyName}</h2>
            <p className="description">{description}</p>
            <button onClick={handleNavigate} className="schedule-button">Schedule Shifts</button>
        </div>
    )
}

export default CompanyCard
