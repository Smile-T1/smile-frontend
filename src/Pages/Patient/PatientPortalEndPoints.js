import axios from "axios";
const serverHost = import.meta.env.VITE_SERVER_HOST;


export async function handleBooking(appointmentData) {
    try {
        const response = await axios.post(`${serverHost}/api/patient/appointment`, appointmentData, {
            headers: {
                "Content-Type": "multipart/form-data", 
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log('response', response)
        if (response.status === 200) {
            return { message: "Appointment booked successfully", status: "success" };
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { message: "Doctor has appointment in the same time", status: "error" };
        } else if (error.response && error.response.status === 500) {
            return { message: "Internal server error in booking appointment", status: "error" };
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

export async function getAllApointments() {
    try {
        const response = await axios.get(`${serverHost}/api/patient/allAppointments`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

export async function getSettings() {
    try {
        const response = await axios.get(`${serverHost}/api/patient/settings`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

export async function DeleteAppointmnetPatientByID(id) {
    try {
        const response = await axios.delete(`${serverHost}/api/patient/appointment/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.status === 200) {
            return { message: "Appointment deleted successfully", status: "success" };
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { message: "Appointment not found", status: "error" };
        } else if (error.response && error.response.status === 500) {
            return { message: "Failed to delete appointment", status: "error" };
        }
        else {
            console.error("Error:", error.message);
        }
    }
}