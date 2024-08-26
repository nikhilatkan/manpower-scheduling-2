import React, { useState } from 'react';
import './ScheduleShift.css';
import AssociateCard from '../../components/AssociateCard/AssociateCard';
import Navbar from '../../components/Navbar/Navbar';
import DemoImg from '../../assets/images/demo_img.jpg';
import ScheduleModal from '../../components/ScheduleModal/ScheduleModal';

function ScheduleShift() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const associate = {
        photo: DemoImg,
        name: 'John Doe',
        number: '123-456-7890',
        emailId: 'abc@gmail.com',
        googleDriveLink: 'https://drive.google.com',
        profileLink: 'https://profile.example.com'
    };

    return (
        <div>
            <Navbar />
            <div>
                <h1 className='schedule-shift-header'>Select Associates</h1>
            </div>
            <div className='associate-list'>
                <AssociateCard associate={associate} />
                <AssociateCard associate={associate} />
                <AssociateCard associate={associate} />
            </div>
            <div className="bottom-fixed-container">
                <div className='scheduleshift-button-container'>
                    <button className="schedule-shift-button" onClick={openModal}>Schedule</button>
                </div>
            </div>
            <ScheduleModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default ScheduleShift
