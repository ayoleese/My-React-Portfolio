import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showNotification, setShowNotification] = useState(false); // State for notification
    
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
    };

    return(
        <div>
            <h1>Contact</h1>
            <div className="card-container">
                <form className="form" onSubmit={handleFormSubmit}>
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
