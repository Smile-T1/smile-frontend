import React, { useState, useRef } from "react";
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
import format from "date-fns/format";
import { set } from "date-fns";

const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

function PatientRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [formatedDate, setFormatedDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // Define the ref for file input

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.target.value);
    setFormatedDate(format(new Date(date.target.value), "dd-MM-yyyy"));
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

  const handleUpload = () => {
    fileInputRef.current.click(); // Trigger file input click event
  };

  // Function to handle registration
  const handleRegistration = async () => {
    try {
      console.log("Registering patient...");
      const patientDetails = JSON.stringify({
        firstName,
        lastName,
        email,
        mobile,
        dob: formatedDate,
        gender,
        address,
        history,
      });

      const formData = new FormData();
      // Append each file to the FormData object
      formData.append("report", files[0]);
      formData.append("patientDetails", patientDetails);
      console.log(formData);

      // Make a POST request to your server endpoint
      const response = await axios.post(
        `${VITE_SERVER_HOST}/api/auth/patient/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response && response.status === 201) {
        setMessage("Patient registered successfully");
      } else {
        setMessage("Patient registration failed");
      }
    } catch (error) {
      if (
        error.response.status == 400 &&
        error.response.data.error == "Email already exists"
      ) {
        setMessage("Email already exists");
      } else {
        console.log(error.response.data.error);
        setMessage("Patient registration failed");
      }
    }
  };

  return (
    // Form to register a new patient
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
              value={email}
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
              value={mobile}
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
              value={selectedDate}
              onChange={handleDateChange}
              style={{ background: "#f6f6f6" }}
            />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup>
              <HStack spacing="80px" onChange={handleGenderChange}>
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
              value={address}
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
            value={history}
            onChange={handleHistoryChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Report / files</FormLabel>
          <div className="report-files-patient">
            <Input
              type="file"
              onChange={(e) => setFiles(e.target.files)}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
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
              onClick={handleUpload}
            >
              {files.length > 0 ? "Remove File" : "Upload"}
            </Button>
            <p style={{ marginTop: "16px" }}>
              {files.length > 0 ? files[0].name : "Upload a file"}
            </p>
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
                // Clear the form
                setFirstName("");
                setLastName("");
                setEmail("");
                setMobile("");
                setSelectedDate(null);
                setHistory("");
                setAddress("");
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
          {message && message == "Email already exists" && (
            <div>
              <Alert status="error">
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
