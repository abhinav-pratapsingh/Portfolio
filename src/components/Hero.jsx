import pic from "../assets/photo.png"
import resume from "../assets/Abhinav_Resume.pdf"
import "../components/Hero.css"

const Hero = ()=>{
    const handleClick = ()=>{
        window.open(resume,'_blank')
    }
    return(
        <div className="hero__section">
            <div className="hero__container">
            <div className="hero__info">
                <h1>Hello, I'm Abhinav Pratap</h1>
                <p>Aspiring Fullstack Web Developer</p>
                <button onClick={handleClick}>Download Resume</button>
            </div>
            <div className="hero__pic">
                <img src={pic} alt="developer image"/>
            </div>
            </div>
        </div>
    )
}

export default Hero;