import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";
const TechnologiesIcons = ({ info }) => {
  const [iconColor, setIconColor] = useState("");
  return (
    <Row className="pt-3 pt-md-5 mt-md-5  justify-content-md-center">
      {info.technologiesIcons.map((icon) => (
        <Col key={icon} s={1} m={2}>
          <i
            style={{ color: "#f7f8f2", fontSize: "3rem" }}
            className={`${icon} colored`}
            onMouseEnter={(event) => {
              event.currentTarget.style.color = "";
              console.log(event.currentTarget.classList);
              event.currentTarget.classList.add("colored");
              console.log(event.currentTarget.classList);
            }}
            onMouseLeave={(event) => {
              event.currentTarget.classList.remove("colored");
              event.currentTarget.style.color = "white";
            }}
          ></i>
        </Col>
      ))}
    </Row>
  );
};

export default TechnologiesIcons;
