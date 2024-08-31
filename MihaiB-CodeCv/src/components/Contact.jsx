import Accordion from "react-bootstrap/Accordion";

const Skills = ({ info }) => {
  return (
    <div className="mt-3  ">
      <Accordion.Item eventKey="3">
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
          <ul className="list-unstyled">
            {" "}
            <li>
              <b className="">{info.contact.email}</b>
            </li>
            <li style={{ color: "#7b7c7d" }}>
              <i>{info.contact.number}</i>
            </li>
            <li> {info.contact.address}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Skills;
