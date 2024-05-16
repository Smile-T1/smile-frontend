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
import DeleteModal from './DeleteModal';

const AppointmentsData = [
  {
    id: 1,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Cancelled",
  },
  {
    id: 3,
    name: "Metawaly",
    date: "2024-04-19",
    time: "10:00 AM",
    appointmentFor: "Check-up",
    status: "Completed",
  }
];

function Table_Data() {
  const [appointmentsData, setAppointmentsData] = useState(AppointmentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
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

  const openModal = (id) => {
    setSelectedAppointmentId(id);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setSelectedAppointmentId(null);
    setShowDeleteModal(false);
  };

  const onDelete = (id) => {
    const updatedAppointments = appointmentsData.map(appointment => {
      if (appointment.id === id) {
        return { ...appointment, status: "Cancelled" };
      }
      return appointment;
    });
    setAppointmentsData(updatedAppointments);
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
                <Td>
                  <span style={{ color: appointment.status === 'Cancelled' ? 'red' : 'blue' }}>
                    {appointment.status}
                  </span>
                </Td>
                <Td>
                  {appointment.status !== 'Cancelled' && appointment.status !== 'Completed' &&(
                    <div style={{
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      <DeleteIcon color='red' style={{ cursor: 'pointer' }} onClick={() => openModal(appointment.id)}/>
                      <MdEdit color='blue' style={{ cursor: 'pointer' }} />
                    </div>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {appointmentsData.length > pageSize && (
        <nav aria-label="Page navigation example" style={{ marginTop: '1rem' }}>
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
      )}
      <DeleteModal isOpen={showDeleteModal} onClose={closeModal} onDelete={onDelete} selectedAppointmentId={selectedAppointmentId} />
    </div>
  );
}

export default Table_Data;
