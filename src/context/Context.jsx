import { useContext, createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [doctor, setDoctor] = useState();
  const [doctorPatients, setDoctorPatients] = useState();
  const [doctorAppointments, setDoctorAppointments] = useState();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("user");

  const fetchDoctorPatients = async () => {
    console.log("from fetch");
    try {
      const result = await api.get(`/api/doctor/getPatients`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDoctorPatients(result.data.patients);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchDoctor = async (type) => {
      const result = await api.get(`/api/info?id=${id}&type=${type}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDoctor(result.data.information);
      console.log(result);
    };

    const fetchDoctorAppointments = async () => {
      try {
        const result = await api.get(`/api/doctor/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result.data.appointments, "appointments");
        setDoctorAppointments(result.data.appointments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor("doctor");
    fetchDoctorPatients();
    fetchDoctorAppointments();
  }, []);

  const deleteAppointments = async (id) => {};
  return (
    <DataContext.Provider
      value={{
        doctor,
        doctorPatients,
        doctorAppointments,
        fetchDoctorPatients,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
