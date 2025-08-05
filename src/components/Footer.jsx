import "./Footer.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt,FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = ()=>{
    return (
        <>
        <footer className="details__section footer">
            <div className="footer__details__container">
                <h1>Let's Talk</h1>
            <div className="details__container footer__container">
                
                <div className="footer__description">
                    <p>Whether you're hiring, looking for a collaborator, or just exploring talented developers — I’m open to opportunities and eager to grow. Let’s connect and see how we can work together!</p>
                    <a href="#contact"><button>Tell us about your project</button></a>
                </div>
                <div className="footer__contact">
                    <div className="footer__contact__ino">
                    <p><FaEnvelope/> abhinavpratap6142@gmail.com</p>
                    <p><FaPhone/> +919411548454</p>
                    <p><FaMapMarkerAlt/> Bahadarpur Jatt, Haridwar(249404), Uttrakhand</p>
                    </div>
                    <div className="footer__contact__links">
                    <a href="https://github.com/abhinav-pratapsingh/"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/abhinav-pratap-a5a210256/"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/thakur_a6hinav?igsh=MXNydGt0em5oaXJqdg=="><FaInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="copyrights">&copy; 2025 Abhinav Pratap. All rights reserved.</div>
            </div>
        </footer>
        </>
    )
}

export default Footer;