import react from "react";
import "./NewRequestCard.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function NewRequestCard() {
  return (
    <div className="NewRequest-card">
      <Card id="new">
        <CardBody>
          <p id="body-name">Patient: John Doe</p>
          <div className="bellow">
            <p id="reason">Surgery</p>
            <p id="body-DT">Date: 12/12/2021, 10:00 AM</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default NewRequestCard;
