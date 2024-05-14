import React, { useState } from "react";
import "./DoctorRegistrationForm.css";
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
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function DoctorRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [formatedDate, setFormatedDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormatedDate(format(new Date(date), "dd-MM-yyyy"));
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSpecialityChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      console.log("Registering doctor...");
      // Make a POST request to your server endpoint
      const response = await axios.post(
        "http://localhost:8000/api/auth/doctor/register",
        {
          "Content-Type": "application/json",
          firstName,
          lastName,
          gender: gender.toLocaleLowerCase(),
          email,
          mobile,
          dob: formatedDate,
          address,
          speciality: selectedDoctor,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM1YWU5ZjkyZGIyMGEzYmI4ZTFiNDkiLCJhY2Nlc3MiOiJBZG1pbiIsImlhdCI6MTcxNTcxMzUzNCwiZXhwIjoxNzE3MDA5NTM0fQ.i7rsSFAelC4Gev8i_8GIojkb8S_4E8h7J04FMMAt3vU`,
          },
        }
      );

      if (response.status == 201) {
        setMessage("Doctor registered successfully");
      }
    } catch (error) {
      if (
        error.response.status == 400 &&
        error.response.data.error == "Email already exists"
      ) {
        setMessage("Email already exists");
      } else {
        console.log(error.response.data.error);
        setMessage("Error registering doctor");
      }
    }
  };

  return (
    <div>
      <div className="Book-appoin-header">
        <h4>Add new Doctor</h4>
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
              value={mobile}
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
              onChange={handleAddressChange}
            />
          </FormControl>
        </div>

        <FormControl>
          <FormLabel> Doctor Speciality</FormLabel>
          <Select
            placeholder="Select Doctor Speciality"
            value={selectedDoctor}
            style={{ background: "#f6f6f6" }}
            onChange={handleSpecialityChange}
          >
            <option value="Routine Check-up and Cleaning">
              Routine Check-up and Cleaning
            </option>
            <option value="Dental Filling">Dental Filling</option>
            <option value="Root Canal Therapy">Root Canal Therapy</option>
            <option value="Tooth Extraction">Tooth Extraction</option>
            <option value="Orthodontic Consultation">
              Orthodontic Consultation
            </option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
            <option value="Emergency Dental Care">Emergency Dental Care</option>
          </Select>
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
                //clear all fields
                setFirstName("");
                setLastName("");
                setEmail("");
                setMobile("");
                setGender("");
                setSelectedDate(null);
                setSelectedDoctor("");
                setAddress("");
              }}
            >
              Cancel
            </Button>
          </div>
          {message && message == "Doctor registered successfully" && (
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
          {message && message == "Error registering doctor" && (
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

export default DoctorRegistrationForm;
