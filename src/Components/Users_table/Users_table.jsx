import React from "react";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "./Users_table.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from Font Awesome
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

const handleDelete = async (id, user) => {
  console.log("Delete user with id:", id);
  try {
    const response = await fetch(
      `${VITE_SERVER_HOST}/api/admin/delete/${user}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status == 200) {
      window.location.reload();
    }
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    const data = await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

function Users_table({ columns, data, user }) {
  return (
    <div className="table-container">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              user === "doctor" &&
              data.map((doctor, index) => {
                console.log(doctor);
                // Check if the doctor has the _id property
                const key = doctor._id ? doctor._id : index;
                if (!doctor.user) {
                  return null;
                }
                return (
                  <Tr key={key}>
                    {doctor.user && doctor.user.firstName && (
                      <Td>{`${doctor.user.firstName} ${doctor.user.lastName}`}</Td>
                    )}
                    {doctor.user && doctor.user.email && (
                      <Td>{doctor.user.email}</Td>
                    )}
                    {doctor.user && doctor.user.mobile && (
                      <Td>{doctor.user.mobile}</Td>
                    )}
                    {doctor.user && <Td>{doctor.user.address}</Td>}
                    {doctor.speciality && <Td>{doctor.speciality}</Td>}

                    <Td
                      onClick={async () => {
                        console.log(doctor._id);
                        await handleDelete(doctor._id);
                      }}
                    >
                      <div className="action-icons">
                        <FaEdit className="edit-icon" />
                        <FaTrash className="delete-icon" />
                      </div>
                    </Td>
                  </Tr>
                );
              })}

            {data &&
              user === "patient" &&
              data.map((patient, index) => {
                //check if patient has data
                const key = patient._id ? patient._id : index;
                if (!patient.user) {
                  return null;
                }
                return (
                  <Tr key={key}>
                    {patient.user && patient.user.firstName && (
                      <Td>{`${patient.user.firstName} ${patient.user.lastName}`}</Td>
                    )}
                    {patient.user && patient.user.email && (
                      <Td>{patient.user.email}</Td>
                    )}
                    {patient.user && patient.user.mobile && (
                      <Td>{patient.user.mobile}</Td>
                    )}
                    {patient.user && <Td>{patient.user.address}</Td>}

                    <Td
                      onClick={async () => {
                        console.log(patient._id);
                        await handleDelete(patient._id);
                      }}
                    >
                      <div className="action-icons">
                        <FaEdit className="edit-icon" />
                        <FaTrash className="delete-icon" />
                      </div>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users_table;
