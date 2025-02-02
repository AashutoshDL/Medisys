import React from 'react';
import PatientAppointment from './PatientAppointment'; // Assuming you have this component
import DoctorAppointment from './DoctorAppointment';
import { useAuth } from '../context/AuthContext';

const Appointment = () => {
    const { role } = useAuth(); // role is an array
  
    console.log("User Roles:", role); // Debugging
  if (!role || role.length === 0) {
    return <p>Loading...</p>; // Handle case where role is undefined or empty
}
  return (
    <div>
      {role.includes("patient") ? (
        <PatientAppointment />  // Render PatientAppointment if the role is 'patient'
      ) : role.includes("doctor") ? (
        <DoctorAppointment />  // Render DoctorAppointments if the role is 'doctor'
      ) : (
        <p>Please log in as either a patient or doctor.</p>  // Display this if no valid role is provided
      )}
    </div>
  );
};

export default Appointment;
