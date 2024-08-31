import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Contact from "./components/Contact";

import Courses from "./components/Courses";
import Skills from "./components/Skills";
import Accordion from "react-bootstrap/Accordion";
import TechnologiesIcons from "./components/TechnologiesIcons";

import { useState } from "react";

const App = () => {
  const info = {
    introduction: {
      name: "Mihai",
      presentation:
        "I like to develop Full Stack Web applications, mostly working with React and Node.js. My goals are to create very productive and user-friendly applications and always learn something new while improving my skills.",
      imgURL: "/cv-removebg.png",
    },

    contact: {
      name: "Mihai",
      imageUrl: "https://placehold.co/400x400",
      email: "mihaialex_barascu@yahoo.com",
      number: "0755349228",
      address: "Pitesti,Romania",
    },

    education: [
      {
        name: "Faculty of Informatics",
        institution:
          "National University of Science and Technology POLITEHNICA Bucharest, Pitești Center",
        perriod: "2022-2025",
        status: "In Progress",
      },
      {
        name: "Tertiary College, Analyst Programmer",
        institution:
          "National University of Science and Technology POLITEHNICA Bucharest, Pitești Center",
        perriod: "2021-2023",
        status: "Graduated",
      },
    ],
    courses: [
      {
        name: "CS50's Introduction to Programming with Python",
        institution: "Harvard University",
        status: "Certified",
      },
      {
        name: "Full Stack Open",
        institution: "University of Helsinki",
        status: "In Progress",
      },
    ],
    skills: [
      {
        category: "Frontend Development",
        technologies: "React, Bootstrap, Javascript, HTML, CSS",
        description:
          "I utilize React.js library for its well-organized and reusable components along with its state management which facilitates user interaction.I also use Bootstrap for its responsiveness grid system and predefined components.",
      },
      {
        category: "Backend Development",
        technologies: "Node.js, .NET, SQL Server, MongoDb",
        description:
          "In Node.js I use Express framework to build routes, middlewares, logs, error handlers, and database access for REST APIs. In .NET I also utilize C# to develop desktop applications following OOP principles, SOLID principles, design patterns, and integrate with SQL Server",
      },
      {
        category: "Additional Technologies",
        technologies: "Git, Fly",
      },
    ],

    technologiesIcons: [
      "devicon-react-original",
      "devicon-nodejs-plain-wordmark",
      "devicon-express-original-wordmark",
      "devicon-javascript-plain",
      "devicon-bootstrap-plain",
      "devicon-css3-plain",
      "devicon-csharp-plain",
      "devicon-microsoftsqlserver-plain-wordmark",
      "devicon-mongodb-plain-wordmark",
      "devicon-npm-original-wordmark",
      "devicon-git-plain",
    ],
  };

  return (
    <Container
      className="pt-md-5 pb-3 "
      style={{
        backgroundColor: "#23212c",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",

        height: "100vw",
        minHeight: 1000,
      }}
      fluid
    >
      <div
        className="pt-md-4"
        style={{
          backgroundColor: "#23212c",
          margin: "auto",

          width: "48%",
          border: "20px solid #23212c ",
          borderRadius: "5%",
          padding: "%",

          minWidth: 365,
        }}
      >
        <Introduction info={info}></Introduction>
        <Accordion className="mt-md-5 ">
          <Row className="px-md-4">
            <Col sm={12} md={6}>
              <Education info={info} />
            </Col>

            <Col sm={12} md={6}>
              <Courses info={info} />
            </Col>

            <Col sm={12} md={8}>
              <Skills info={info} />
            </Col>

            <Col sm={12} md={4}>
              <Contact info={info} />
            </Col>
          </Row>
        </Accordion>

        <TechnologiesIcons info={info} />
      </div>
    </Container>
  );
};

export default App;
