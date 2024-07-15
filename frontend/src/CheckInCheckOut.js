import React, { useState } from 'react';
import axios from 'axios';

const CheckInCheckOut = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [message, setMessage] = useState('');

    const handleCheckIn = () => {
        axios.post('/api/check_in/', { vehicle_id: vehicleId })
            .then(response => setMessage('Vehicle checked in'))
            .catch(error => console.error(error));
    };

    const handleCheckOut = () => {
        axios.post('/api/check_out/', { session_id: sessionId })
            .then(response => setMessage(`Vehicle checked out. Total due: ${response.data.total_amount_due}`))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Check In/Check Out</h2>
            <div>
                <label>Vehicle ID:</label>
                <input type="text" value={vehicleId} onChange={e => setVehicleId(e.target.value)} />
                <button onClick={handleCheckIn}>Check In</button>
            </div>
            <div>
                <label>Session ID:</label>
                <input type="text" value={sessionId} onChange={e => setSessionId(e.target.value)} />
                <button onClick={handleCheckOut}>Check Out</button>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default CheckInCheckOut;
