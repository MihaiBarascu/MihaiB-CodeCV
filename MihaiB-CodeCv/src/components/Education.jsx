import Accordion from "react-bootstrap/Accordion";

const Education = ({ info }) => {
  return (
    <div className="mt-3">
      <style type="text/css">{`
        .accordion {
          --bs-accordion-btn-bg:#23212c;
          --bs-accordion-active-bg:#23212c;
          --bs-accordion-active-color:#f7f8f2;
          --bs-accordion-btn-focus-box-shadow:#f7f8f2; 
          --bs-accordion-bg:#f7f8f2;
          --bs-accordion-btn-color:#fe80bf;
          --bs-accordion-border-color:#fe80bf;

          width:100%;
          min-width:300px;
          max-width:900px;
          border: none;

        }


        `}</style>

      <Accordion.Item eventKey="0">
        <Accordion.Header>Education</Accordion.Header>
        <Accordion.Body>
          {info.education.map((ed) => (
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
              <li> {ed.perriod}</li>
            </ul>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Education;
