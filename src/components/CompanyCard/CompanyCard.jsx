import React from 'react'
import "./CompanyCard.css";

function CompanyCard({ logo, companyName, description }) {
    return (
        <div className="card">
            <img className="logo" src={logo} alt={`${companyName} logo`} />
            <h2 className="company-name">{companyName}</h2>
            <p className="description">{description}</p>
            <button className="schedule-button">Schedule Shifts</button>
        </div>
    )
}

export default CompanyCard
