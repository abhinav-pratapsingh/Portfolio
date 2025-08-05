import { useEffect, useState } from "react"
import profilePic from "../assets/photo.jpg"
import "../components/Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return <>
        <header className="header">
            <div className="header__container">
                <div className="header__info">
                    <div className="header__logo">
                        <img src={profilePic} alt="profilePic" />
                    </div>
                    <h1 className="header__text">AP</h1>
                </div>
                <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
                    <ul className="header__nav__items">
                        <ul className="header__nav__items">
                            <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
                            <li><a href="#education" onClick={()=>setMenuOpen(false)}>Education</a></li>
                            <li><a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a></li>
                            <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
                            <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
                            <li><a href="#certifications" onClick={()=>setMenuOpen(false)}>Certifications</a></li>
                            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
                        </ul>

                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </header>
    </>
}

export default Header;