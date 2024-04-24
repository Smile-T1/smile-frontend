import React from "react";
import { format } from "date-fns";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";


function Table_Data(){
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM, yyyy");
  const formattedTime = format(currentDate, "h:mm a");

  return (
      <div className="bg-white mt-4 p-4 rounded-xl">
        <h3 className=" text-xl font-medium">Recent appointments list</h3>
        <TableContainer className="mt-12 p-2">
          <Table variant="">
            <Thead>
              <Tr>
                <Th>Sr no</Th>
                <Th>Name</Th>
                <Th isNumeric>Mobile</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td isNumeric>1.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
              <Tr>
                <Td>2.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
              <Tr>
                <Td>3.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default Table_Data;
