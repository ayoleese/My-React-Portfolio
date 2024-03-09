import React, { useState } from "react";

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
        <div>
            <h2 class="text-center">Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div class="row mb-2">
                    <label class="col-sm-1" htmlFor="name">Name:</label>
                    <div class="col-sm-7">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-sm-1" htmlFor="email">Email:</label>
                    <div class="col-sm-7">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-1" htmlFor="message">Message:</label>
                    <div class="col-sm-7">
                    <textarea
                        class="form-control-sm"
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
    );
}