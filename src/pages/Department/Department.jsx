import React from 'react'
import { useLocation } from 'react-router-dom'
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard';
import './Department.css';
import Navbar from '../../components/Navbar/Navbar';

function Department() {

    const departments = ['Automation', 'Flow wrap', 'Sanitation', 'Ice'];

    const state = useLocation();
    console.log(state);

    return (
        <div>
            <Navbar />
            <div className="hellofresh-page">
                <img
                    src="https://img.hellofresh.com/w_256,q_100,f_auto,c_limit,fl_lossy/hellofresh_website/logo/Hello_Fresh_Lockup.png"
                    alt="HelloFresh Logo"
                    className="hellofresh-logo"
                />
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2 className="hellofresh-title">Departments</h2>
                        {departments.map((department, idx) => (
                            <DepartmentCard key={idx} title={department} />
                        ))}
                    </div>
                    <div className="right-image">
                        <img
                            src="https://img.hellofresh.com/w_2048,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/gb/cms/homepage/homepage%20to%20Contentful/US-homepage-image.png"
                            alt="HelloFresh Family Meal Kit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department
