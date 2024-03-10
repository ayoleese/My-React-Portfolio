import React, { useState } from "react";
import '../styles/style.css';

const styles = {
    card: {
        background: '#2a2e3c',
        color: '#e0e0e0',
    }
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="card" style={styles.card}>
            <div className="card-body">
                <h1>Contact</h1>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="form-group row mb-2">
                        <label className="col-sm-3" htmlFor="name">Name:</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label className="col-sm-3" htmlFor="email">Email:</label>
                        <div className="col-sm-9">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-sm-3" htmlFor="message">Message:</label>
                        <div className="col-sm-9">
                            <textarea
                                className="form-control"
                                rows="3"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>        
    );
}

