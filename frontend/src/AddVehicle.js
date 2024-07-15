import React, { useState } from 'react';
import axios from 'axios';

const AddVehicle = () => {
    const [number, setNumber] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const vehicleData = {
            user: 1, // Replace with the actual user ID
            number,
            make,
            model
        };

        axios.post('/api/vehicles/add/', vehicleData)
            .then(response => {
                setMessage('Vehicle added successfully');
                setNumber('');
                setMake('');
                setModel('');
            })
            .catch(error => {
                console.error(error);
                setMessage('Failed to add vehicle');
            });
    };

    return (
        <div>
            <h2>Add Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Number (License Plate):</label>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <div>
                    <label>Make (Manufacturer):</label>
                    <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
                </div>
                <div>
                    <label>Model:</label>
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
                </div>
                <button type="submit">Add Vehicle</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AddVehicle;
