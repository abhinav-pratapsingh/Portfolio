import logo from "../assets/logoProdesk.webp"
import './ExperienceCard.css'
import certificate from "../assets/prodeskCertificate.jpg"

const ExperienceCard = () => {

    const handleClick = () => {
    window.open(certificate, '_blank');
  };

    return (
        <div className="Experience_card">
            <div className="card__container">
                <div className="card__heading">
                    <img src={logo} alt="company logo" />
                    <div className="card__ht">
                        <h1>Backend Intern at PRODESK IT</h1>
                        <p>-(JUN 2025-JUL 2025)</p>
                    </div>
                </div>
                <div className="experience__details">
                    <p>During this period, I have worked extensively on building robust and scalable backend systems using modern web technologies. My focus has been on creating clean, well-structured APIs, ensuring secure data handling, and optimizing performance.</p>
                    <ul>
                        <li>Designed and developed RESTful APIs using Node.js and Express.js.</li>
                        <li>Implemented secure user authentication and role-based authorization with JWT and bcrypt.</li>
                        <li>Integrated MongoDB databases with Mongoose for schema modeling and data validation.</li>
                        <li>Applied middleware patterns for logging, error handling, and access control.</li>
                    </ul>
                </div>
                <button onClick={handleClick} style={{ cursor: 'pointer' }}>View Ceritificate</button>
            </div>

        </div>
    )
}

export default ExperienceCard;