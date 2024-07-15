import React from 'react';
import VehicleList from './VehicleList';
import CheckInCheckOut from './CheckInCheckOut';
import AddVehicle from './AddVehicle';  // Import the new component

function App() {
    return (
        <div className="App">
            <h1>Parking System</h1>
            <AddVehicle />  {/* Add the new component here */}
            <VehicleList />
            <CheckInCheckOut />
        </div>
    );
}

export default App;
