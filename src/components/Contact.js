import React, { useState, useEffect } from 'react';
import { useBlocker } from 'react-router-dom';
import '../styles/css/Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isDirty, setIsDirty] = useState(false);

    const shouldBlockNavigation = isDirty;
    useBlocker(shouldBlockNavigation);

    useEffect(() => {
        setIsDirty(!!(name || email || message));
        message && console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }, [name, email, message]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    const checkConditions = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name.length < 2 || !/[a-zA-Z]/.test(name)) {
            alert("Imię musi mieć co najmniej 2 litery i zawierać tylko litery.");
            return false;
        } else if (!emailRegex.test(email)) {
            alert("Podaj poprawny adres e-mail.");
            return false;
        } else if (message.length < 10) {
            alert("Wiadomość musi mieć co najmniej 10 znaków.");
            return false;
        }else if (!/[a-zA-Z]/.test(message)) {
            alert("Wiadomość musi zawierać litery.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkConditions()) {
            alert("Wiadomość została wysłana!");
            setName("");
            setEmail("");
            setMessage("");
            setIsDirty(false);
        }
    };

    return (
        <div className="contact">
            <div className="contact-card">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h1>Napisz do nas</h1>
                    <input
                        name="name"
                        type="text"
                        placeholder="Imię"
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Twoja wiadomość..."
                        value={message}
                        onChange={handleChange}
                    ></textarea>
                    <button className="btn" type="submit">
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;