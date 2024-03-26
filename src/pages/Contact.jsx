import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showNotification, setShowNotification] = useState(false); // State for notification
    
    const form = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowNotification(true); //displays notification when user submit form
        
        // Form reset after submitting
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // Hides notification after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);

        // Sending email
        sendEmail(e);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8o3at1s', 'template_x283fpt', form.current, {
                publicKey: 'U9vQPtKgvzRr50Jxm',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return(
        <div>
            <h1>Contact</h1>
            <div className="card-container">
                <form className="form" onSubmit={handleFormSubmit} ref={form}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            rows="3"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {showNotification && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowNotification(false)}>&times;</span>
                        <p>Thanks for contacting me, I will get back to you shortly!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
