import "../components/Certifications.css"
import logo from "../assets/udemyLogo.png"
import certificate from "../assets/udemyCertificate.jpg"

const Certifications = ()=>{

    const handleClick = () => {
        window.open(certificate, '_blank');}

    return (
        <div className='details__section' id='certifications'>
            <div className='details__container'>
                <div className="details__heading">
                <h1>Certifications</h1>
                </div>
                <div className="details__details">
                    <div className="Experience_card">
                                <div className="card__container">
                                    <div className="card__heading">
                                        <img src={logo} alt="company logo" />
                                        <div className="card__ht">
                                            <h1>The Web Developer Bootcamp</h1>
                                            <p>-Udemy</p>
                                        </div>
                                    </div>
                                    <div className="experience__details">
                                        <p>During this bootcamp, I gained hands-on experience in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). The course covered both frontend and backend development, along with essential tools and best practices in modern web development.</p>
                                        <ul>
                                            <li>Built interactive UI components using React.js (state, props, routing, forms)</li>
                                            <li>Developed RESTful APIs with Node.js and Express.js</li>
                                            <li>Implemented secure user authentication and role-based authorization with JWT and bcrypt</li>
                                            <li>Integrated MongoDB databases with Mongoose for schema modeling and data validation</li>
                                            <li>Used Postman for testing and validating backend APIs</li>
                                        </ul>
                                    </div>
                                    <button onClick={handleClick} style={{ cursor: 'pointer' }}>View Ceritificate</button>
                                </div>
                    
                            </div>
                </div>
                </div>
        </div>
    )
}

export default Certifications;