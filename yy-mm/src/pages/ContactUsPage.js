import { useState } from "react";
import "../css/contactUs.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (<>
                    <Nav></Nav>

        <div className="contact-container">
            {!submitted && (
                <>
                    <h2>צור קשר</h2>
                    <p>נשמח לשמוע מכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">שם מלא</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">אימייל</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">הודעה</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">שלח</button>
                    </form>
                </>
            )}

            {submitted && (
                <div className="thank-you-message">נשמח לראותך שוב! 🎵</div>
            )}
        </div>
        
            <Footer></Footer></>

    );
}

export default ContactUs;
