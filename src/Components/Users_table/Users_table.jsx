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
import "./Users_table.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from Font Awesome

function Users_table({ columns, data }) {
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
            {data.map((row, index) => (
              <Tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <Td key={idx}>{value}</Td>
                ))}
                <Td>
                  <div className="action-icons">
                    <FaEdit className="edit-icon" />
                    <FaTrash className="delete-icon" />
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users_table;
