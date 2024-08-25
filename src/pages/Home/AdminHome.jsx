import React from 'react'
import Slider from '../../components/Slider/Slider'
import Navbar from '../../components/Navbar/Navbar'
import CompanyCard from '../../components/CompanyCard/CompanyCard'
import HelloFreshLogo from "../../assets/images/logos/Hello_Fresh_logo.avif";
import FactorMealsImg from "../../assets/images/logos/factor_meals_logo.webp";
import "./Home.css";

function AdminHome() {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className='company-cards'>
                <CompanyCard logo={HelloFreshLogo} companyName="Hello Fresh" description="Hello Fresh is a meal kit delivery service - order your meal kit today!" />
                <CompanyCard logo={FactorMealsImg} companyName="Factor Meals" description="Factor Meals is a meal kit delivery service - order your meal kit today!" />
            </div>
        </div>
    )
}

export default AdminHome
