import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Divider,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { se } from "date-fns/locale";

function PatientRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("Male");
  const [bloodGroup, setBloodGroup] = useState("");
  const [patientType, setPatientType] = useState("New Patient");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState("");

  const [files, setFiles] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    setSelectedDate(formattedDate);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleHistoryChange = (e) => {
    setHistory(e.target.value);
  };

  // Function to handle registration
  const handleRegistration = async () => {
    try {
      console.log("Registering patient...");
      // Make a POST request to your server endpoint
      const response = await axios.post(
        "http://localhost:8000/api/auth/patient/register",
        {
          "Content-Type": "application/json",
          firstName,
          lastName,
          gender: gender.toLocaleLowerCase(),
          email,
          mobile,
          dob: selectedDate,
          address,
          history,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM1YWU5ZjkyZGIyMGEzYmI4ZTFiNDkiLCJhY2Nlc3MiOiJBZG1pbiIsImlhdCI6MTcxNDc5NDgwMCwiZXhwIjoxNzE2MDkwODAwfQ.PKHvRkiMZMc6s_4u9NhCSmFoHH6ang0uNRWGYKrELkM`,
          },
        }
      );

      if (response.status == 201) {
        setMessage("Patient registered successfully");
      }
      if (response.status == 400) {
        setMessage("Patient registration failed");
        console.log("messageeee", message);
      }
    } catch (error) {
      setMessage("Patient registration failed");
      console.error("Registration failed:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile no.</FormLabel>
            <Input
              type="tel"
              placeholder="Mobile number"
              style={{ background: "#f6f6f6" }}
              onChange={handleMobileChange}
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
            <RadioGroup onChange={handleGenderChange}>
              <HStack spacing="80px">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
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
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
        </div>

        <FormControl>
          <FormLabel>Patient History</FormLabel>
          <Input
            placeholder="Enter History, ex. diabetes,"
            style={{ background: "#f6f6f6" }}
            onChange={handleHistoryChange}
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
              onClick={handleRegistration}
            >
              Register
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              style={{
                borderRadius: "9999px",
                width: "115px",
              }}
              onClick={() => {
                // Redirect to the previous page
                window.history.back();
              }}
            >
              Cancel
            </Button>
          </div>
          {message && message == "Patient registered successfully" && (
            <div>
              <Alert status="success">
                <Flex>
                  <AlertIcon />
                  <AlertTitle mr={2}>{message}</AlertTitle>
                </Flex>
              </Alert>
            </div>
          )}
          {message && message == "Patient registration failed" && (
            <div>
              <Alert status="error">
                <Flex>
                  <AlertIcon />
                  <AlertTitle mr={2}>{message}</AlertTitle>
                </Flex>
              </Alert>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientRegistrationForm;
