import {
  Button,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { useDataContext } from "../../context/Context";

const DoctorAppointments = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM, yyyy");
  const formattedTime = format(currentDate, "h:mm a");
  const { doctorAppointments } = useDataContext();
  console.log(doctorAppointments);
  return (
    <div className="container mt-8 bg-[#F6F6F6] rounded-lg h-full p-6">
      <div className="bg-[#FFFFFF] p-8">
        <div className="flex justify-end items-center gap-4">
          <span>Show</span>
          <div className="w-1/4">
            <Select placeholder="Select option">
              <option value="option1">Todays</option>
              <option value="option2">Yesterday</option>
            </Select>{" "}
          </div>
          <span>Appointments</span>
        </div>
        <div className="bg-[#F6F6F6] p-4 flex items-center mt-8 gap-6">
          <div className="w-1/4">
            <Input
              placeholder="Search Patients"
              variant={""}
              background={"white"}
              borderRadius={"50"}
            />
          </div>
          <div>
            <Button borderRadius={"50"} background={"#d0f1e0"} color={"black"}>
              +
            </Button>
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl">
          <h3 className=" text-xl font-medium">Recent appointments list</h3>
          <TableContainer className="mt-12 p-2">
            <Table variant="">
              <Thead>
                <Tr>
                  <Th>Sr no</Th>
                  <Th>Name</Th>
                  <Th isNumeric>Mobile</Th>
                  <Th>Email</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>ٍStatus</Th>
                </Tr>
              </Thead>
              <Tbody>
                {doctorAppointments?.map((item, index) => (
                  <Tr key={index}>
                    <Td isNumeric>{index + 1}</Td>
                    <Td>{item.patient}</Td>
                    <Td isNumeric>1********0</Td>
                    <Td>test@gmail.com</Td>

                    <Td>{formattedDate}</Td>
                    <Td>{item.time}</Td>
                    <Td className="text-blue-500">{item.status}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
