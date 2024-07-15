import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/vehicles/')  // Use absolute URL
            .then(response => setVehicles(response.data))
            .catch(error => {
                console.error('There was an error!', error.response ? error.response.data : error.message);
                setMessage('Failed to fetch vehicles');
            });
    }, []);

    return (
        <div>
            <h2>Vehicle List</h2>
            {message && <p>{message}</p>}
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.number}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
