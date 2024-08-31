import Accordion from "react-bootstrap/Accordion";

const Skills = ({ info }) => {
  return (
    <div className="mt-3  ">
      <Accordion.Item eventKey="2">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body>
          {info.skills.map((ed) => (
            <ul key={ed.category} className="list-unstyled">
              {" "}
              <li>
                {" "}
                <b>{ed.category}</b>
              </li>
              <li style={{ color: "#7b7c7d" }}>
                {" "}
                <i>{ed.technologies}</i>
              </li>
              <li> {ed.description}</li>
            </ul>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Skills;
