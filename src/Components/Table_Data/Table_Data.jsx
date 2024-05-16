import React, { useState, useEffect } from "react";
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
import EditModal from './EditModal';
import { getAllApointments } from "../../Pages/Patient/PatientPortalEndPoints";

function Table_Data() {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllApointments();
        const appointmentsArray = response.appointments || [];
        setAppointmentsData(appointmentsArray);
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      }
    };
    fetchData();
  }, []);

  const totalPageCount = appointmentsData ? Math.ceil(appointmentsData.length / pageSize) : 0;
  const startIndex = (currentPage - 1) * pageSize;
  const visibleAppointments = appointmentsData ? appointmentsData.slice(startIndex, startIndex + pageSize) : [];

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

  const openModal = (id, action) => {
    setSelectedAppointmentId(id);
    if (action === 'delete') {
      setShowDeleteModal(true);
      setShowEditModal(false);
    } else if (action === 'edit') {
      setShowDeleteModal(false);
      setShowEditModal(true);
    }
  };

  const closeModal = () => {
    setSelectedAppointmentId(null);
    setShowDeleteModal(false);
    setShowEditModal(false);
  };

  const onDelete = (id) => {
    const updatedAppointments = appointmentsData.map(appointment => {
      if (appointment._id === id) {
        return { ...appointment, status: "Cancelled" };
      }
      return appointment;
    });
    setAppointmentsData(updatedAppointments);
  };

  return (
    <div className="table-container">
      {appointmentsData && (
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
                <Tr key={appointment._id}>
                  <Td>{startIndex + index + 1}</Td>
                  <Td>{appointment.doctor.user.username}</Td>
                  <Td>{appointment.date}</Td>
                  <Td>{appointment.time}</Td>
                  <Td>{appointment.Type}</Td>
                  <Td>
                    <span style={{ color: appointment.status === 'Cancelled' ? 'red' : 'blue' }}>
                      {appointment.status}
                    </span>
                  </Td>
                  <Td>
                    {appointment.status !== 'Cancelled' && appointment.status !== 'Completed' && (
                      <div style={{
                        display: 'flex',
                        gap: '1rem'
                      }}>
                        <DeleteIcon color='red' style={{ cursor: 'pointer' }} onClick={() => openModal(appointment._id, 'delete')} />
                        <MdEdit color='blue' style={{ cursor: 'pointer' }} onClick={() => openModal(appointment._id, 'edit')} />
                      </div>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      {appointmentsData && appointmentsData.length > pageSize && (
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
      <EditModal isOpen={showEditModal} onClose={closeModal} selectedAppointmentId={selectedAppointmentId} />
    </div>
  );
}

export default Table_Data;
