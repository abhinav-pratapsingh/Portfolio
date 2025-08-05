import "./Education.css"
import "../components/Common.css"
const Education = ()=>{
     return (
        <div className='details__section' id='education'>
            <div className='details__container'>
                <div className="details__heading">
                <h1>Education</h1>
                </div>
                <div className="details__details left__align">
                    <ul>
                        <li><span className="education__title">B.Tech in Computer Science </span> — College of Engineering Roorkee<br/>2022 – 2026 (Pursuing)</li>
                        <br/>
                        <li><span className="education__title">12th – CBSE Board </span> — Vidya Mandir Senior Secondary School<br/>2021 – 2022 | 81.8%</li>
                        <br/>
                        <li><span className="education__title">10th – CBSE Board </span> — S.B.N International School<br/>2019 – 2020 | 81.8%</li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default Education;