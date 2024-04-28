import React, { useState } from "react";
import "./PatientRegistrationForm.css";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Book_app_Patient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("Male");
  const [bloodGroup, setBloodGroup] = useState("");
  const [patientType, setPatientType] = useState("New Patient");
  const [address, setAddress] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentFor, setAppointmentFor] = useState("");
  const [selectedAppointmentDate, setSelectedAppointmentDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [note, setNote] = useState("");
  const [files, setFiles] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      style={{
        marginLeft: "100px",
        marginRight: "100px",
        marginTop: "60px",
        marginBottom: "40px",
      }}
    >
      <div className="Book-appoin-header">
        <h4>Add new patient</h4>
      </div>
      <div className="book-form-patient">
        <div className="row-fill-book-data">
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
        </div>
        <div className="row-fill-book-data">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile no.</FormLabel>
            <Input
              type="tel"
              placeholder="Mobile number"
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
        </div>
        <div className="row-fill-book-data">
          <FormControl>
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              selected={selectedDate}
              onChange={handleDateChange}
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup>
              <HStack spacing="80px">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="row-fill-book-data">
          <FormControl as="fieldset">
            <FormLabel>Patient</FormLabel>
            <RadioGroup>
              <HStack spacing="80px">
                <Radio value="Male">New Patient</Radio>
                <Radio value="Female">Old Patient</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </div>
        <div style={{ width: "100%" }}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Enter Your Address"
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
        </div>

        <FormControl>
          <FormLabel>Patient History</FormLabel>
          <Input
            placeholder="Enter History, ex. diabetes,"
            style={{ background: "#f6f6f6" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Report / files</FormLabel>
          <div className="report-files-patient">
            <Button
              colorScheme="blue"
              style={{
                borderRadius: "9999px",
                width: "100px",
                fontFamily: "Noto Sans, Arial, sans-serif",
                fontSize: "14px",
                margin: "8px 2px",
                marginLeft: "1rem",
              }}
            >
              Upload
            </Button>
            <p style={{ marginTop: "16px" }}> or drag and drop files</p>
          </div>
        </FormControl>
        <div className="row-button-book-data" style={{ marginTop: "10px" }}>
          <div className="book-cancel-buttons">
            <Button
              colorScheme="blue"
              mr={3}
              style={{
                borderRadius: "9999px",
                width: "115px",
              }}
            >
              Book
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              style={{
                borderRadius: "9999px",
                width: "115px",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book_app_Patient;
