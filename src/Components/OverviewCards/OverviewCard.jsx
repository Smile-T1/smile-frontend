import react from "react";
import "./OverviewCard.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function Overviewcard() {
  return (
    <div className="Overview-card">
      <Card variant="filled">
        <CardHeader>Total patients</CardHeader>
        <CardBody>
          <p id="body">300</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Overviewcard;
