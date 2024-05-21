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
import { DeleteIcon } from '@chakra-ui/icons';
import { MdEdit } from "react-icons/md";
import { getprescriptions } from "../../../Pages/Patient/PatientPortalEndPoints";

function Prescription() {
  const [currentPage, setCurrentPage] = useState(1);
  const [prescriptionData, setPrescriptionData] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getprescriptions();
        console.log('pres',response);
        const appointmentsArray = Array.isArray(response) ? response : [];
        setPrescriptionData(appointmentsArray);
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
        setPrescriptionData([]);
      }
    };
    fetchData();
  }, []);

  const totalPageCount = prescriptionData ? Math.ceil(prescriptionData.length / pageSize) : 0;
  const startIndex = (currentPage - 1) * pageSize;
  const visibleAppointments = Array.isArray(prescriptionData) ? prescriptionData.slice(startIndex, startIndex + pageSize) : [];

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
      {Array.isArray(prescriptionData) && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr no.</Th>
                <Th>Doctor</Th>
                <Th>Prescription for</Th>
                <Th>Date</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {visibleAppointments.map((prescription, index) => (
                <Tr key={prescription._id}>
                  <Td>{startIndex + index + 1}</Td>
                  <Td>{prescription?.Doctor?.user?.username}</Td>
                  <Td>{prescription?.Speciality}</Td>
                  <Td>{prescription?.Date}</Td>
                  <Td>{prescription?.Time}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      {Array.isArray(prescriptionData) && prescriptionData.length > pageSize && (
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
    </div>
  );
}

export default Prescription;
