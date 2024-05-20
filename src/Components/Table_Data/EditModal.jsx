import React, { useState, useRef } from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    DrawerCloseButton,
    Button,
    FormControl,
    Select,
    FormLabel,
    Input,
    useToast
} from "@chakra-ui/react";
import { editappointment } from "../../Pages/Patient/PatientPortalEndPoints";

const EditModal = ({ isOpen, onClose, selectedAppointmentId }) => {
    const [files, setFiles] = useState([]);
    const [appointmentTime, setAppointmentTime] = useState("");
    const fileInputRef = useRef(null);
    const toast = useToast();

    function Toast(message, state) {
        toast({
            description: message,
            status: state,
            duration: 3000,
            isClosable: true,
        });
    }

    const handleFileUpload = (e) => {
        if (files.length > 0) {
            setFiles([]);
        } else {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleEdit = async () => {
        const formData = new FormData();
        const updatedAppointment = JSON.stringify({
            _id: selectedAppointmentId,
            time: appointmentTime,
        });
        formData.append("updatedAppointment", updatedAppointment);

        // if (files.length > 0) {
        //     formData.append("file", files[0]);
        // }

        try {
            const response = await editappointment(formData);
            if (response && response.status === "success") {
                Toast(response.message, "success");
            } else if (response && response.status === "error") {
                Toast(response.message, "error");
            }
        } catch (error) {
            console.error('Error:', error);
            Toast("An error occurred while saving changes", "error");
        }
        onClose();
    };

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit Appointment</DrawerHeader>
                <DrawerBody>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <FormControl>
                            <FormLabel>Time</FormLabel>
                            <Select 
                                placeholder="Choose an appointment time" 
                                style={{ background: '#f6f6f6' }}
                                value={appointmentTime}
                                onChange={(e) => setAppointmentTime(e.target.value)}
                            >
                                <option value='10:45PM'>10:45 PM</option>
                                <option value='11:00AM'>11:00 AM</option>
                                <option value='11:30AM'>11:30 AM</option>
                                <option value='12:30PM'>12:30 PM</option>
                                <option value='2:00PM'>2:00 PM</option>
                                <option value='3:30PM'>3:30 PM</option>
                                <option value='4:45PM'>4:45 PM</option>
                                <option value='5:00PM'>5:00 PM</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Report / Files</FormLabel>
                            <div className='report-files-patient'>
                                <Input
                                    type="file"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                    ref={fileInputRef}
                                    accept="image/*, .pdf, .doc, .docx"
                                />
                                <Button
                                    colorScheme={files.length > 0 ? 'red' : 'blue'}
                                    style={{
                                        borderRadius: '9999px',
                                        width: '100px',
                                        fontFamily: 'Noto Sans, Arial, sans-serif',
                                        fontSize: '14px',
                                        margin: '8px 2px',
                                        marginLeft: '1rem'
                                    }}
                                    onClick={handleFileUpload}
                                >
                                    {files.length > 0 ? 'Remove' : 'Upload'}
                                </Button>
                                {files.length > 0 ? (
                                    <p style={{ marginTop: '16px' }}>
                                        <span>{files[0].name}</span>
                                    </p>
                                ) : (
                                    <p style={{ marginTop: '16px' }}> or drag and drop files</p>
                                )}
                            </div>
                        </FormControl>
                    </div>
                </DrawerBody>
                <DrawerFooter>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default EditModal;
