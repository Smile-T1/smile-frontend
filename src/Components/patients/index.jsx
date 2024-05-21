import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Delete from "./icons/delete";
import Edit from "./icons/edit";
import { useDataContext } from "../../context/Context";
import api from "../../utils/api";
// import Swal from "sweetalert2";

const DoctorPatients = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM, yyyy");
  const formattedTime = format(currentDate, "h:mm a");
  const { doctorPatients, doctorAppointments, fetchDoctorPatients } =
    useDataContext();
  console.log(doctorPatients);

  // const [PatientsData, setPatientsData] = useState([]);
  // useEffect(() => {
  //   doctorPatients?.map((patient) =>
  //     setPatientsData([...PatientsData, patient.user])
  //   );
  // }, []);

  // Initialize state to manage open/close state of each drawer
  const [isOpenArray, setIsOpenArray] = useState(new Array(3).fill(false)); // Assuming 3 rows initially
  const today = new Date();
  const { isOpen: isAnyDrawerOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");
  const [selectedPatient, setselectedPatient] = useState();
  const [trigger, settrigger] = useState(false);
  const btnRefs = Array(3)
    .fill()
    .map((_, i) => React.useRef());

  // Function to handle opening/closing of drawer for a specific row
  const toggleDrawer = (index, item) => {
    const newArray = [...isOpenArray];
    newArray[index] = !newArray[index];
    setIsOpenArray(newArray);
    setselectedPatient(item.user);
    console.log(item.user);
  };
  const handleAddPrescriptions = async (e, item) => {
    e.preventDefault();

    const appointment = doctorAppointments.find(
      (patient) => patient.appointment.patient.user == item.user._id
    );

    let formdata = new FormData(e.target);

    try {
      const result = await api.put(
        "/api/doctor/editAppointment",
        {
          Medication: formdata.get("Medication"),
          Dosage: formdata.get("Dosage"),
          Consultation: formdata.get("Consultation"),
          appointmentID: appointment?.appointment?._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPatient = async (e, item) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    try {
      const result = await api.patch(
        "/api/doctor/editPatientInfo",
        {
          patientId: item.user._id,
          updateFields: Object.fromEntries(formdata.entries()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchDoctorPatients();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (item) => {
    const appointment = doctorAppointments.find(
      (patient) => patient.appointment.patient.user == item.user._id
    );
    console.log(appointment);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await api.post(
            "/api/doctor/deleteAppointments",
            {
              appointmentId: appointment?.appointment?._id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetchDoctorPatients();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
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
          <span>patients</span>
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
              Add new patients +
            </Button>
          </div>
        </div>

        <div className="bg-white mt-4 p-4 rounded-xl">
          <h3 className=" text-xl font-medium">Patient list</h3>
          <TableContainer className="mt-12 p-2">
            <Table variant="">
              <Thead>
                <Tr>
                  <Th>Sr no</Th>
                  <Th>Name</Th>
                  <Th isNumeric>Mobile</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Treatment</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {doctorPatients?.map((item, index) => (
                  <Tr key={index}>
                    <Td isNumeric>{index + 1}.</Td>
                    <Td>
                      {item.user.firstName} {item.user.lastName}
                    </Td>
                    <Td isNumeric>{item.user.mobile}</Td>
                    <Td>{item.user.email}</Td>
                    <Td>
                      {today.getFullYear() -
                        new Date(item.user.dob).getFullYear()}
                    </Td>
                    <Td>{item.prescription[0]?.Medication}</Td>
                    <Td className="text-blue-500 flex  gap-4">
                      <div onClick={() => handleDelete(item)}>
                        <Delete />
                      </div>
                      <Button
                        ref={btnRefs[index]}
                        backgroundColor={"white"}
                        onClick={() => toggleDrawer(index, item)}
                      >
                        <Drawer
                          isOpen={isOpenArray[index]}
                          placement="right"
                          onClose={() => toggleDrawer(index, item)}
                          finalFocusRef={btnRefs[index]}
                          size="xl"
                        >
                          <DrawerOverlay />
                          <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                              <h2>
                                {item.user.firstName} {item.user.lastName}
                              </h2>
                            </DrawerHeader>
                            <DrawerBody>
                              <div className="border rounded-lg border-[#4483FD] border-dashed p-4">
                                <form
                                  className="flex flex-col gap-12"
                                  onSubmit={(e) => handleEditPatient(e, item)}
                                >
                                  <h3 className="text-[#034561] font-semibold">
                                    Personal details
                                  </h3>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        First Name
                                      </FormLabel>
                                      <Input
                                        type="text"
                                        name="firstName"
                                        className="rounded-lg"
                                        defaultValue={item.user.firstName}
                                      />
                                    </InputGroup>

                                    <InputGroup className="items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Last Name
                                      </FormLabel>
                                      <Input
                                        type="text"
                                        name="lastName"
                                        className="rounded-lg"
                                        defaultValue={item.user.lastName}
                                      />
                                    </InputGroup>
                                  </div>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Email id
                                      </FormLabel>
                                      <Input
                                        type="email"
                                        name="email"
                                        className="rounded-lg"
                                        defaultValue={item.user.email}
                                      />
                                    </InputGroup>

                                    <InputGroup className="items-center">
                                      <FormLabel className="text-nowrap ">
                                        Phone no.
                                      </FormLabel>
                                      <Input
                                        type="tel"
                                        name="mobile"
                                        className="rounded-lg"
                                        defaultValue={item.user.mobile[0]}
                                      />
                                    </InputGroup>
                                  </div>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap ">
                                        Date of birth
                                      </FormLabel>
                                      <Input
                                        type="date"
                                        name="dob"
                                        className="rounded-lg"
                                        defaultValue={format(
                                          item.user.dob,
                                          "yyyy-MM-dd"
                                        )}
                                      />
                                    </InputGroup>

                                    <InputGroup className="items-center">
                                      <FormLabel className="text-nowrap ">
                                        age
                                      </FormLabel>
                                      <Input
                                        type="number"
                                        min={0}
                                        disabled
                                        className="rounded-lg"
                                        defaultValue={
                                          today.getFullYear() -
                                          new Date(item.user.dob).getFullYear()
                                        }
                                      />
                                    </InputGroup>
                                  </div>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Address{" "}
                                      </FormLabel>
                                      <Textarea
                                        type="text"
                                        name="address"
                                        className="rounded-lg"
                                        defaultValue={item.user.address}
                                      />
                                    </InputGroup>
                                  </div>
                                  <Button type="submit">Save</Button>
                                </form>
                              </div>
                              <div className="border rounded-lg border-[#4483FD] border-dashed p-4 mt-8">
                                <form
                                  className="flex flex-col gap-12"
                                  onSubmit={(e) =>
                                    handleAddPrescriptions(e, item)
                                  }
                                >
                                  <h3 className="text-[#034561] font-semibold">
                                    Medical details
                                  </h3>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Medication
                                      </FormLabel>
                                      <Input
                                        type="text"
                                        name="Medication"
                                        className="rounded-lg"
                                      />
                                    </InputGroup>

                                    <InputGroup className="items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Dosage{" "}
                                      </FormLabel>
                                      <Input
                                        type="text"
                                        name="Dosage"
                                        className="rounded-lg"
                                      />
                                    </InputGroup>
                                  </div>
                                  <div className="flex items-center gap-4  ">
                                    <InputGroup className="w-1/2 items-center">
                                      <FormLabel className="text-nowrap items-center">
                                        Consultation{" "}
                                      </FormLabel>
                                      <Input
                                        type="text"
                                        name="Consultation"
                                        className="rounded-lg"
                                      />
                                    </InputGroup>
                                    <Button type="submit">Submit</Button>
                                  </div>
                                </form>
                              </div>
                              <div className="border rounded-lg border-[#4483FD] border-dashed p-4 mt-8">
                                <h3 className="text-[#034561] font-semibold">
                                  Medical reports
                                </h3>
                                <TableContainer className="mt-12 p-2">
                                  <Table variant="">
                                    <Thead>
                                      <Tr>
                                        <Th>Sr no</Th>
                                        <Th>Surgery</Th>
                                        <Th>Generated by</Th>
                                        <Th>Date & time</Th>
                                        <Th>Attachement</Th>
                                      </Tr>
                                    </Thead>
                                    <Tbody>
                                      <Tr>
                                        <Td isNumeric>1.</Td>
                                        <Td>Name</Td>
                                        <Td>Dr.Name</Td>
                                        <Td>
                                          {formattedDate} , {formattedTime}
                                        </Td>
                                        <Td className="flex gap-4">
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.8801"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M28.8892 14.6206V13.5348C28.8892 12.9377 28.4006 12.4491 27.8035 12.4491H18.3288C18.2347 12.4491 18.1407 12.4128 18.0754 12.3442L16.6894 10.9581C16.4831 10.7554 16.2117 10.6396 15.9222 10.6396H12.6036C12.0027 10.6396 11.5178 11.1282 11.5178 11.7253V14.6204L28.8892 14.6206Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M11.5178 15.3447V24.7542C11.5178 25.355 12.0027 25.8399 12.6036 25.8399H27.8036C28.4007 25.8399 28.8893 25.355 28.8893 24.7542L28.8892 15.3447H11.5178ZM18.4123 20.1983C18.5536 20.057 18.7827 20.057 18.924 20.1983L19.8417 21.1159V17.0786C19.8417 16.8785 20.0037 16.7167 20.2036 16.7167C20.4036 16.7167 20.5656 16.8785 20.5656 17.0786V21.1156L21.4833 20.1978C21.6247 20.0564 21.8537 20.0564 21.995 20.1978C22.1364 20.3391 22.1364 20.5682 21.995 20.7095L20.4598 22.2448C20.4263 22.2783 20.3863 22.3048 20.3419 22.3232C20.2977 22.3416 20.2508 22.3513 20.2037 22.3513C20.1565 22.3513 20.1097 22.3417 20.0654 22.3233C20.0211 22.3049 19.981 22.2784 19.9476 22.2449L18.4123 20.7099C18.271 20.5686 18.271 20.3395 18.4123 20.1982L18.4123 20.1983ZM22.1942 24.1063H18.2133C18.0134 24.1063 17.8514 23.9444 17.8514 23.7443C17.8514 23.5443 18.0134 23.3824 18.2133 23.3824H22.1942C22.3941 23.3824 22.5561 23.5443 22.5561 23.7443C22.5561 23.9444 22.3941 24.1063 22.1942 24.1063Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.1189"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M19.5423 12.1602C14.1127 12.1602 9.14127 14.6636 5.43921 19.0002C9.14133 23.3368 14.1126 25.8402 19.5423 25.8402C24.9367 25.8402 29.8376 23.231 33.5044 19.0002C29.802 14.7338 24.9015 12.1602 19.5423 12.1602ZM19.4717 24.2888C16.5453 24.2888 14.1831 21.9265 14.1831 19.0002C14.1831 16.0738 16.5453 13.7115 19.4717 13.7115C22.3981 13.7115 24.7604 16.0738 24.7604 19.0002C24.7604 21.9265 22.3981 24.2888 19.4717 24.2888Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M19.4717 15.1221C17.321 15.1221 15.5933 16.8498 15.5933 19.0005C15.5933 21.1513 17.321 22.879 19.4717 22.879C19.6481 22.879 19.8596 22.8439 20.0359 22.8439C19.2954 22.3854 18.7666 21.5394 18.7666 20.5874C18.7666 19.1417 19.9653 17.943 21.411 17.943C22.1866 17.943 22.8566 18.2603 23.3502 18.7893C23.209 16.7441 21.5519 15.1221 19.4717 15.1221Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                        </Td>
                                      </Tr>
                                      <Tr>
                                        <Td isNumeric>1.</Td>
                                        <Td>Name</Td>
                                        <Td>Dr.Name</Td>
                                        <Td>
                                          {formattedDate} , {formattedTime}
                                        </Td>
                                        <Td className="flex gap-4">
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.8801"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M28.8892 14.6206V13.5348C28.8892 12.9377 28.4006 12.4491 27.8035 12.4491H18.3288C18.2347 12.4491 18.1407 12.4128 18.0754 12.3442L16.6894 10.9581C16.4831 10.7554 16.2117 10.6396 15.9222 10.6396H12.6036C12.0027 10.6396 11.5178 11.1282 11.5178 11.7253V14.6204L28.8892 14.6206Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M11.5178 15.3447V24.7542C11.5178 25.355 12.0027 25.8399 12.6036 25.8399H27.8036C28.4007 25.8399 28.8893 25.355 28.8893 24.7542L28.8892 15.3447H11.5178ZM18.4123 20.1983C18.5536 20.057 18.7827 20.057 18.924 20.1983L19.8417 21.1159V17.0786C19.8417 16.8785 20.0037 16.7167 20.2036 16.7167C20.4036 16.7167 20.5656 16.8785 20.5656 17.0786V21.1156L21.4833 20.1978C21.6247 20.0564 21.8537 20.0564 21.995 20.1978C22.1364 20.3391 22.1364 20.5682 21.995 20.7095L20.4598 22.2448C20.4263 22.2783 20.3863 22.3048 20.3419 22.3232C20.2977 22.3416 20.2508 22.3513 20.2037 22.3513C20.1565 22.3513 20.1097 22.3417 20.0654 22.3233C20.0211 22.3049 19.981 22.2784 19.9476 22.2449L18.4123 20.7099C18.271 20.5686 18.271 20.3395 18.4123 20.1982L18.4123 20.1983ZM22.1942 24.1063H18.2133C18.0134 24.1063 17.8514 23.9444 17.8514 23.7443C17.8514 23.5443 18.0134 23.3824 18.2133 23.3824H22.1942C22.3941 23.3824 22.5561 23.5443 22.5561 23.7443C22.5561 23.9444 22.3941 24.1063 22.1942 24.1063Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.1189"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M19.5423 12.1602C14.1127 12.1602 9.14127 14.6636 5.43921 19.0002C9.14133 23.3368 14.1126 25.8402 19.5423 25.8402C24.9367 25.8402 29.8376 23.231 33.5044 19.0002C29.802 14.7338 24.9015 12.1602 19.5423 12.1602ZM19.4717 24.2888C16.5453 24.2888 14.1831 21.9265 14.1831 19.0002C14.1831 16.0738 16.5453 13.7115 19.4717 13.7115C22.3981 13.7115 24.7604 16.0738 24.7604 19.0002C24.7604 21.9265 22.3981 24.2888 19.4717 24.2888Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M19.4717 15.1221C17.321 15.1221 15.5933 16.8498 15.5933 19.0005C15.5933 21.1513 17.321 22.879 19.4717 22.879C19.6481 22.879 19.8596 22.8439 20.0359 22.8439C19.2954 22.3854 18.7666 21.5394 18.7666 20.5874C18.7666 19.1417 19.9653 17.943 21.411 17.943C22.1866 17.943 22.8566 18.2603 23.3502 18.7893C23.209 16.7441 21.5519 15.1221 19.4717 15.1221Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                        </Td>
                                      </Tr>
                                      <Tr>
                                        <Td isNumeric>1.</Td>
                                        <Td>Name</Td>
                                        <Td>Dr.Name</Td>
                                        <Td>
                                          {formattedDate} , {formattedTime}
                                        </Td>
                                        <Td className="flex gap-4">
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.8801"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M28.8892 14.6206V13.5348C28.8892 12.9377 28.4006 12.4491 27.8035 12.4491H18.3288C18.2347 12.4491 18.1407 12.4128 18.0754 12.3442L16.6894 10.9581C16.4831 10.7554 16.2117 10.6396 15.9222 10.6396H12.6036C12.0027 10.6396 11.5178 11.1282 11.5178 11.7253V14.6204L28.8892 14.6206Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M11.5178 15.3447V24.7542C11.5178 25.355 12.0027 25.8399 12.6036 25.8399H27.8036C28.4007 25.8399 28.8893 25.355 28.8893 24.7542L28.8892 15.3447H11.5178ZM18.4123 20.1983C18.5536 20.057 18.7827 20.057 18.924 20.1983L19.8417 21.1159V17.0786C19.8417 16.8785 20.0037 16.7167 20.2036 16.7167C20.4036 16.7167 20.5656 16.8785 20.5656 17.0786V21.1156L21.4833 20.1978C21.6247 20.0564 21.8537 20.0564 21.995 20.1978C22.1364 20.3391 22.1364 20.5682 21.995 20.7095L20.4598 22.2448C20.4263 22.2783 20.3863 22.3048 20.3419 22.3232C20.2977 22.3416 20.2508 22.3513 20.2037 22.3513C20.1565 22.3513 20.1097 22.3417 20.0654 22.3233C20.0211 22.3049 19.981 22.2784 19.9476 22.2449L18.4123 20.7099C18.271 20.5686 18.271 20.3395 18.4123 20.1982L18.4123 20.1983ZM22.1942 24.1063H18.2133C18.0134 24.1063 17.8514 23.9444 17.8514 23.7443C17.8514 23.5443 18.0134 23.3824 18.2133 23.3824H22.1942C22.3941 23.3824 22.5561 23.5443 22.5561 23.7443C22.5561 23.9444 22.3941 24.1063 22.1942 24.1063Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                          <svg
                                            width="39"
                                            height="38"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="19.1189"
                                              cy="19"
                                              r="18.62"
                                              fill="#EBFFF5"
                                              stroke="#4483FD"
                                              strokeWidth="0.76"
                                            />
                                            <path
                                              d="M19.5423 12.1602C14.1127 12.1602 9.14127 14.6636 5.43921 19.0002C9.14133 23.3368 14.1126 25.8402 19.5423 25.8402C24.9367 25.8402 29.8376 23.231 33.5044 19.0002C29.802 14.7338 24.9015 12.1602 19.5423 12.1602ZM19.4717 24.2888C16.5453 24.2888 14.1831 21.9265 14.1831 19.0002C14.1831 16.0738 16.5453 13.7115 19.4717 13.7115C22.3981 13.7115 24.7604 16.0738 24.7604 19.0002C24.7604 21.9265 22.3981 24.2888 19.4717 24.2888Z"
                                              fill="#409D9B"
                                            />
                                            <path
                                              d="M19.4717 15.1221C17.321 15.1221 15.5933 16.8498 15.5933 19.0005C15.5933 21.1513 17.321 22.879 19.4717 22.879C19.6481 22.879 19.8596 22.8439 20.0359 22.8439C19.2954 22.3854 18.7666 21.5394 18.7666 20.5874C18.7666 19.1417 19.9653 17.943 21.411 17.943C22.1866 17.943 22.8566 18.2603 23.3502 18.7893C23.209 16.7441 21.5519 15.1221 19.4717 15.1221Z"
                                              fill="#409D9B"
                                            />
                                          </svg>
                                        </Td>
                                      </Tr>
                                    </Tbody>
                                  </Table>
                                </TableContainer>
                              </div>
                            </DrawerBody>
                            <DrawerFooter>
                              <Button
                                variant="outline"
                                mr={3}
                                onClick={() => toggleDrawer(index)}
                              >
                                Close
                              </Button>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>
                        <Edit />
                      </Button>
                    </Td>
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

export default DoctorPatients;
