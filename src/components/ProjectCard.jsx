import "./projectCard.css"
import zayakaPic from "../assets/zayaka.png"
import badmintonPic from "../assets/BadmintonScorekeeper.png"
import taskManagerPic from "../assets/TaskManagerWebApp.png"
const ProjectCard = () => {

    return (
        <>
            <div className="project__card">
                <div className="project__card__image">
                    <img src={zayakaPic} />
                </div>
                <div className="project_card_heading">
                    <h1>ZAYKAXPRESS</h1><p>-(Backend Developer)</p>
                </div>
                <div className="project_card__description">
                    <p>Engineered the backend of a role-based food delivery platform using Express.js, Mongoose, Cloudinary, and JWT. Implemented secure authentication, efficient image handling, and structured role-specific access. Designed dynamic dashboards for admins, users, and restaurants, enabling full control over menu management, order processing, and user activities.</p>
                </div>
                <div className="project__card__buttons">
                    <button onClick={() => { window.open('https://zaykaxpress.netlify.app/', '_blank') }}>Visit Project</button>
                    <button onClick={() => { window.open('https://github.com/abhinav-pratapsingh/Backend-Food-Order', '_blank') }}>Visit GitHub</button>
                </div>
            </div>
             <div className="project__card">
                <div className="project__card__image">
                    <img src={taskManagerPic} />
                </div>
                <div className="project_card_heading">
                    <h1>Task Manager Web app</h1>
                </div>
                <div className="project_card__description">
                    <p>A simple Task Manager web application built with Express.js and EJS, featuring a clean HTML and CSS interface. It allows users to add, edit, delete, and mark tasks as completed. Tasks are stored securely in a MongoDB database, and user access is protected using JWT authentication for secure login and task management.</p>
                </div>
                <div className="project__card__buttons">
                    <button onClick={() => { window.open('https://taskmanagerwebapp-w0qy.onrender.com/', '_blank') }}>Visit Project</button>
                    <button onClick={() => { window.open('https://github.com/abhinav-pratapsingh/TaskManagerWebApp', '_blank') }}>Visit GitHub</button>
                </div>
            </div>
             <div className="project__card">
                <div className="project__card__image">
                    <img src={badmintonPic} />
                </div>
                <div className="project_card_heading">
                    <h1>Simple Badminton Score Keeper</h1>
                </div>
                <div className="project_card__description">
                    <p>Created a basic scorekeeper web app using HTML, CSS, and JavaScript as part of foundational frontend learning. The app allows a human scorekeeper to manually update and track players’ points. It includes a “dues back” feature to deduct or adjust scores when necessary. Focused on core concepts like DOM manipulation, input handling, and basic interface structure.</p>
                </div>
                <div className="project__card__buttons">
                    <button onClick={() => { window.open('https://abhinav-pratapsingh.github.io/badminton/', '_blank') }}>Visit Project</button>
                    <button onClick={() => { window.open('https://github.com/abhinav-pratapsingh/badminton', '_blank') }}>Visit GitHub</button>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;