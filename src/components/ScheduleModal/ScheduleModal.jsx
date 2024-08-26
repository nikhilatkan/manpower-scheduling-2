import React, { useState } from 'react';
import './ScheduleModal.css';

const ScheduleModal = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');

    const handleScheduleShift = () => {
        // Logic for scheduling a shift goes here
        onClose(); // Close the modal after scheduling
    };

    if (!isOpen) return null;

    const getDayName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Schedule Shift</h2>
                <div className="modal-body">
                    <label>
                        Select Date:
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </label>
                    {selectedDate && <p>Selected Day: {getDayName(selectedDate)}</p>}
                    <label>
                        Start Time:
                        <input
                            type="time"
                            value={selectedStartTime}
                            onChange={(e) => setSelectedStartTime(e.target.value)}
                        />
                    </label>
                    <label>
                        End Time:
                        <input
                            type="time"
                            value={selectedEndTime}
                            onChange={(e) => setSelectedEndTime(e.target.value)}
                        />
                    </label>
                </div>
                <div className="modal-footer">
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                    <button className="schedule-shift-button" onClick={handleScheduleShift}>Schedule Shift</button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
