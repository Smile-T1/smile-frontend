import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Select
  } from '@chakra-ui/react'
import "./Table_Data.css";

function Table_Data() {

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

export default Table_Data;