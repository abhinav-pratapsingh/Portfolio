import "../components/Contact.css"
import { useRef } from "react";
import emailjs from "emailjs-com"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_j17p3xc',
            'template_jvfaut7',
            form.current,
            'p568eNxjMixfqmz9T'
        ).then(
            (result) => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Something went wrong. Please try again.");
                console.error(error);
            }
        );
    };

    return (
        <div className='details__section' id='contact'>
            <div className='details__container'>
                <div className="details__heading">
                    <h1>Connect With Me</h1>
                </div>
                <div className="details__details">
                    <form  className="contact__form" ref={form} onSubmit={sendEmail}>
                        <input className="form__user__name" type="text" name="userName" placeholder="Your Name" required />
                        <input className="form__user__email" type="email" name="userEmail" placeholder="Your Email" required />
                        <textarea className="form__user__message" name="message" rows="8" placeholder="Your Message" required />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;