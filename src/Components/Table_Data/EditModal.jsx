import React, {useState, useRef} from "react";
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
    Input 
} from "@chakra-ui/react";

const EditModal = ({ isOpen, onClose, selectedAppointmentId }) => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        if (files.length > 0) {
            setFiles([]);
        } else {
            fileInputRef.current.click();
        }
    };

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit appointment</DrawerHeader>
                <DrawerBody>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <FormControl>
                            <FormLabel>Doctor</FormLabel>
                            <Select placeholder="Choose doctor" style={{ background: '#f6f6f6' }}>
                                <option value='omar'>Dr.omar</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Time</FormLabel>
                            <Select placeholder="Choose an appointment time" style={{ background: '#f6f6f6' }}>
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
                        <FormLabel>Report / files</FormLabel>
                        <div className='report-files-patient'>
                            <Input
                                type="file"
                                onChange={(e) => setFiles(e.target.files)}
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                accept="image/*, .pdf, .doc, .docx"
                            />
                            <Button
                                colorScheme={files.length > 0 ? 'red' : 'blue'}
                                style={{
                                    borderRadius: '9999px',
                                    width: '100px', fontFamily:
                                        'Noto Sans, Arial, sans-serif',
                                    fontSize: '14px',
                                    margin: '8px 2px',
                                    marginLeft: '1rem'
                                }}
                                onClick={() => handleFileUpload()}
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
                    <Button colorScheme="blue">
                        Save Changes
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default EditModal;
