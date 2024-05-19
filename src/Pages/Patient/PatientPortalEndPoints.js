import axios from "axios";
const serverHost = import.meta.env.VITE_SERVER_HOST;


export async function handleBooking(appointmentData) {
    console.log(appointmentData)
    try {
        const response = await axios.post(`${serverHost}/api/patient/appointment`, appointmentData, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log('response', response)
        if (response.status === 200) {
            console.log("Appointment booked successfully");
        } else {
            console.error("Unexpected response:", response.status, response.statusText);
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            console.error("Doctor has appointment in the same time");
        } else if (error.response && error.response.status === 500) {
            console.error("Internal server error in booking appointment");
        }
        else {
            console.error("Error:", error.message);
        }
    }
}

export async function getDoctorsWithSpeciality(appointmentfor) {
    try {
        const response = await axios.get(`${serverHost}/api/patient/appointmentsDoctors?speciality=${appointmentfor}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data.doctors;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}