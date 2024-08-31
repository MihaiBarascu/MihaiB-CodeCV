import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Introduction = ({ info }) => {
  return (
    <Container fluid>
      <Row className="">
        <Col s="12" md="3">
          <Image
            className="float-md-end me-3 mt-md-5"
            src={info.introduction.imgURL}
            style={{ maxWidth: "60%" }}
            roundedCircle
            fluid
          />
        </Col>
        <Col s="12" md="7">
          s
          <h1
            style={{
              color: "#f7f8f2",
              fontFamily: "muli, sans-serif",
              fontWeight: "bold",
              fonStyle: "normal",
              marginTop: 30,
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: " #9580ff" }}>{info.introduction.name}</span>
          </h1>
          <p
            style={{
              color: "#f7f8f2",
              fontFamily: "noto-sans, sans-serif",
              fontWeight: "500",
              fonStyle: "normal",
              minWidth: 240,
              fontSize: "1rem",
            }}
          >
            {info.introduction.presentation}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
