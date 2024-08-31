import Accordion from "react-bootstrap/Accordion";

const Courses = ({ info }) => {
  return (
    <div className="float-center mt-3">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Courses</Accordion.Header>
        <Accordion.Body style={{ borderColor: "yellow" }}>
          {info.courses.map((ed) => (
            <ul key={ed.name} className="list-unstyled">
              {" "}
              <li>
                {" "}
                <b>{ed.name}</b>
              </li>
              <li style={{ color: "#7b7c7d" }}>
                {" "}
                <i>{ed.institution}</i>
              </li>
              <li> {ed.status}</li>
            </ul>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Courses;
