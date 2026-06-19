import logo from "../assets/logoProdesk.webp";
import veloraLogo from "../assets/velloralogo.webp";

import "./ExperienceCard.css";

import certificate from "../assets/prodeskCertificate.jpg";

const ExperienceCard = () => {
  const handleCertificateClick = () => {
    window.open(certificate, "_blank");
  };

  return (
    <div className="Experience_card">
      {/* Velora Experience */}
      <div className="card__container">
        <div className="card__heading">
          <img src={veloraLogo} alt="Velora Global Ventures" />
          <div className="card__ht">
            <h1>Backend Developer at Velora Global Ventures (Brands Barrel)</h1>
            <p>(Mar 2026 - Present)</p>
          </div>
        </div>

        <div className="experience__details">
          <p>
            Currently working as a Backend Developer, responsible for building,
            deploying, and maintaining production-ready web applications.
            Contributing across development, deployment, and maintenance while
            ensuring performance, security, and reliability.
          </p>

          <ul>
            <li>
              Develop and maintain scalable RESTful APIs using Node.js and
              Express.js.
            </li>
            <li>
              Design and optimize MongoDB schemas, queries, and data models.
            </li>
            <li>
              Integrate third-party APIs and external services into web
              applications.
            </li>
            <li>
              Deploy and manage applications in production environments.
            </li>
            <li>
              Configure domains, SSL certificates, and server environments.
            </li>
            <li>
              Monitor application performance and troubleshoot production
              issues.
            </li>
            <li>
              Collaborate with frontend developers to deliver end-to-end
              features.
            </li>
          </ul>
        </div>
      </div>

      {/* Prodesk Experience */}
      <div className="card__container">
        <div className="card__heading">
          <img src={logo} alt="PRODESK IT" />
          <div className="card__ht">
            <h1>Backend Development Intern at PRODESK IT</h1>
            <p>(Jun 2025 - Jul 2025)</p>
          </div>
        </div>

        <div className="experience__details">
          <p>
            Worked on building robust and scalable backend systems using modern
            web technologies. Focused on API development, authentication,
            database management, and backend architecture.
          </p>

          <ul>
            <li>
              Designed and developed RESTful APIs using Node.js and Express.js.
            </li>
            <li>
              Implemented secure user authentication and role-based
              authorization using JWT and bcrypt.
            </li>
            <li>
              Integrated MongoDB databases with Mongoose for schema modeling
              and validation.
            </li>
            <li>
              Applied middleware patterns for logging, error handling, and
              access control.
            </li>
            <li>
              Tested and debugged APIs using Postman and manual testing.
            </li>
          </ul>
        </div>

        <button
          onClick={handleCertificateClick}
          style={{ cursor: "pointer" }}
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;