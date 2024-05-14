import { useContext, createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [doctor, setDoctor] = useState();
  const [doctorPatients, setDoctorPatients] = useState();
  const [doctorAppointments, setDoctorAppointments] = useState();

  useEffect(() => {
    const fetchDoctor = async (id, type) => {
      const result = await api.get(`/api/info?id=${id}&type=${type}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyYzI0NDU3NjJkMTk5ZmYyNjE3NjgiLCJhY2Nlc3MiOiJEb2N0b3IiLCJpYXQiOjE3MTQ2NzMyMTQsImV4cCI6MTcxNTk2OTIxNH0.sUazn_beFtXchsxRsNX6AG4L8D1Rzd1k0MR9tDkluAo`,
        },
      });
      setDoctor(result.data.information);
    };
    const fetchDoctorPatients = async () => {
      const result = await api.get(`/api/doctor/getPatients`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyYzI0NDU3NjJkMTk5ZmYyNjE3NjgiLCJhY2Nlc3MiOiJEb2N0b3IiLCJpYXQiOjE3MTQ2NzMyMTQsImV4cCI6MTcxNTk2OTIxNH0.sUazn_beFtXchsxRsNX6AG4L8D1Rzd1k0MR9tDkluAo`,
        },
      });
      setDoctorPatients(result.data.patients);
    };
    const fetchDoctorAppointments = async () => {
      try {
        const result = await api.get(`/api/doctor/appointments`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyYzI0NDU3NjJkMTk5ZmYyNjE3NjgiLCJhY2Nlc3MiOiJEb2N0b3IiLCJpYXQiOjE3MTQ2NzMyMTQsImV4cCI6MTcxNTk2OTIxNH0.sUazn_beFtXchsxRsNX6AG4L8D1Rzd1k0MR9tDkluAo`,
          },
        });
        console.log(result.data.appointments, "appointments");
        setDoctorAppointments(result.data.appointments);
      } catch (error) {
        console.log(error);
        console.log(doctorAppointments);
      }
    };
    fetchDoctor("6633a9db2ede98aa88711eba", "doctor");
    fetchDoctorAppointments();
    fetchDoctorPatients();
  }, []);
  return (
    <DataContext.Provider
      value={{ doctor, doctorPatients, doctorAppointments }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
