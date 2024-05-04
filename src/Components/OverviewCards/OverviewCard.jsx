import react from "react";
import "./OverviewCard.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function Overviewcard(props) {
  return (
    <div className="Overview-card">
      <Card id="card2">
        <CardHeader>{props.header}</CardHeader>
        <CardBody>
          <p id="body">300</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Overviewcard;
