import React, { useState } from "react";
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
import { DeleteIcon } from '@chakra-ui/icons';
import { MdEdit } from "react-icons/md";

const appointmentsData = [
  {
    id: 1,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
  },
  {
    id: 1,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Pending",
  },
];

function Table_Data() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPageCount = Math.ceil(appointmentsData.length / pageSize);
  
  const startIndex = (currentPage - 1) * pageSize;
  const visibleAppointments = appointmentsData.slice(startIndex, startIndex + pageSize);

  const nextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            {visibleAppointments.map((appointment, index) => (
              <Tr key={startIndex + index}>
                <Td>{startIndex + index + 1}</Td>
                <Td>{appointment.name}</Td>
                <Td>{appointment.date}</Td>
                <Td>{appointment.time}</Td>
                <Td>{appointment.appointmentFor}</Td>
                <Td>{appointment.status}</Td>
                <Td>
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <DeleteIcon color='red' />
                    <MdEdit color='blue' />
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <nav aria-label="Page navigation example" style={{marginTop: '1rem'}}>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          </li>
          {[...Array(totalPageCount)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
              <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPageCount && 'disabled'}`}>
            <button className="page-link" onClick={nextPage} disabled={currentPage === totalPageCount}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Table_Data;
