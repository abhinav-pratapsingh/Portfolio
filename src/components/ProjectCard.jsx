import "./ProjectCard.css";
import elabourPic from "../assets/e-labour.png";
import zayakaPic from "../assets/zayaka.png";
import taskManagerPic from "../assets/TaskManagerWebApp.png";

const ProjectCard = () => {
    return (
        <>
            {/* e-Labour */} <div className="project__card"> <div className="project__card__image"> <img src={elabourPic} alt="e-Labour" /> </div>
                <div className="project_card_heading">
                    <h1>e-Labour</h1>
                    <p>-(Full Stack Developer)</p>
                </div>

                <div className="project_card__description">
                    <p>
                        Developed a full-stack labour hiring platform connecting customers
                        with skilled workers across multiple service categories. Built
                        secure REST APIs using Node.js and Express.js, implemented
                        JWT-based authentication and role-based access control, and
                        designed scalable MongoDB schemas for users, workers, bookings,
                        and reviews. Developed booking management logic to prevent
                        conflicting worker assignments and deployed the frontend on
                        Render while hosting the backend on AWS EC2 in a production
                        environment.
                    </p>
                </div>

                <div className="project__card__buttons">
                    <button
                        onClick={() => {
                            window.open("https://e-labour-frontend.onrender.com/", "_blank");
                        }}
                    >
                        Visit Project
                    </button>

                    <button
                        onClick={() => {
                            window.open("https://github.com/abhinav-pratapsingh", "_blank");
                        }}
                    >
                        Visit GitHub
                    </button>
                </div>
            </div>

            {/* ZAYKAXPRESS */}
            <div className="project__card">
                <div className="project__card__image">
                    <img src={zayakaPic} alt="ZAYKAXPRESS" />
                </div>

                <div className="project_card_heading">
                    <h1>ZAYKAXPRESS</h1>
                    <p>-(Backend Developer)</p>
                </div>

                <div className="project_card__description">
                    <p>
                        Engineered the backend of a role-based food delivery platform using
                        Express.js, MongoDB, Cloudinary, and JWT. Implemented secure authentication,
                        efficient image handling, and structured role-based access control.
                        Developed APIs supporting admins, users, and restaurants for menu
                        management, order processing, and user operations while ensuring
                        maintainability and scalability.
                    </p>
                </div>

                <div className="project__card__buttons">
                    <button
                        onClick={() => {
                            window.open(
                                "https://zaykaxpress.netlify.app/",
                                "_blank"
                            );
                        }}
                    >
                        Visit Project
                    </button>

                    <button
                        onClick={() => {
                            window.open(
                                "https://github.com/abhinav-pratapsingh",
                                "_blank"
                            );
                        }}
                    >
                        Visit GitHub
                    </button>
                </div>
            </div>

            {/* Task Manager */}
            <div className="project__card">
                <div className="project__card__image">
                    <img src={taskManagerPic} alt="Task Manager Web App" />
                </div>

                <div className="project_card_heading">
                    <h1>Task Manager Web App</h1>
                    <p>-(Full Stack Developer)</p>
                </div>

                <div className="project_card__description">
                    <p>
                        Built a task management application using Express.js, EJS, MongoDB, and JWT
                        authentication. Implemented secure user login, task creation, editing,
                        deletion, and completion tracking. Developed backend APIs and database
                        integration for persistent task management while focusing on clean code,
                        authentication, and efficient CRUD operations.
                    </p>
                </div>

                <div className="project__card__buttons">
                    <button
                        onClick={() => {
                            window.open(
                                "https://taskmanagerwebapp-w0qy.onrender.com/",
                                "_blank"
                            );
                        }}
                    >
                        Visit Project
                    </button>

                    <button
                        onClick={() => {
                            window.open(
                                "https://github.com/abhinav-pratapsingh/TaskManagerWebApp",
                                "_blank"
                            );
                        }}
                    >
                        Visit GitHub
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
