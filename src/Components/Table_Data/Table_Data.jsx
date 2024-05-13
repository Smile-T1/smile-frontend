import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "./Table_Data.css";

const appointmentsData = [
  {
    id: 1,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
    action: "View",
  },
  {
    id: 2,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
    action: "View",
  },
  {
    id: 3,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
    action: "View",
  },
  {
    id: 4,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
    action: "View",
  },
  {
    id: 1,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
    action: "View",
  },
];

function Table_Data() {
  return (
    <div className="table-container">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Appointment for</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointmentsData.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.id}</Td>
                <Td>{appointment.name}</Td>
                <Td>{appointment.date}</Td>
                <Td>{appointment.time}</Td>
                <Td>{appointment.appointmentFor}</Td>
                <Td>{appointment.status}</Td>
                <Td>{appointment.action}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Table_Data;
