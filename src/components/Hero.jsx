import pic from "../assets/photo.png"
import "../components/Hero.css"

const Hero = ()=>{
    return(
        <div className="hero__section">
            <div className="hero__container">
            <div className="hero__info">
                <h1>Hello, I'm Abhinav Pratap</h1>
                <p>Aspiring Fullstack Web Developer</p>
                <button>Download Resume</button>
            </div>
            <div className="hero__pic">
                <img src={pic} alt="developer image"/>
            </div>
            </div>
        </div>
    )
}

export default Hero;