import React from 'react';
import "./Appointment.css";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function Appointment() {

  return (
    <div>
        <TableContainer>
            <Table size='sm'>
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
                <Tr>
                    <Td>1</Td>
                    <Td>Dr. Smith</Td>
                    <Td>2024-04-19</Td>
                    <Td>10:00 AM</Td>
                    <Td>Check-up</Td>
                    <Td>Pending</Td>
                    <Td>View</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Appointment;
