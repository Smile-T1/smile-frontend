import React from "react";
import "./NewRequestCard.css";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

function NewRequestCard({ data }) {
  const { patient, doctor, date, time, type } = data;

  return (
    <div className="NewRequest-card">
      <Card id="new">
        <CardBody>
          <div className="top">
            <p id="body-name">Patient: {patient}</p>
            <p id="body-name">Doctor: {doctor}</p>
          </div>

          <div className="bellow">
            <p id="reason">Type: {type}</p>
            <p id="body-DT">
              Date: {date}, {time}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default NewRequestCard;
