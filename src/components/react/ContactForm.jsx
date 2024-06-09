
import React, { useRef, useState } from 'react'; 
import { sendMail, isValidEmail, isValidName } from "../../utils/utils";
import "./form-react.css";
import ContactFieldText from './ContactTextField.jsx';
import ContactTextAreaField from './ContactTextAreaField.jsx';

const ContactForm = ({ children }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Entro al form de react ?");
        const data = new FormData();
        data.append("name", nameRef.current?.value || "");
        data.append("email", emailRef.current?.value || "");
        data.append("message", messageRef.current?.value || "");

        validInputs(data, errors);
        const hasErrors = Object.values(errors).some((msg) => msg);

        if (!hasErrors) {
            const response = await sendMail(data);

            if (response.ok) {
                console.log('Form submitted successfully')
            } else {
                console.error('Error submitting form')
            }
        }
    }

    const validInputs = (data) => {
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        if (typeof email !== 'string' || !isValidEmail(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Email is not valid.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }

        if (typeof name !== 'string' || !isValidName(name)) {
            setErrors(prevErrors => ({ ...prevErrors, name: 'Please enter a valid name.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, name: '' }));
        }

        if (typeof message !== 'string' || !message.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, message: 'Please enter a message.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, message: '' }));
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form w-full h-full flex flex-col justify-center gap-y-[13px] left-0 backdrop-blur-[20px] relative">
            <ContactFieldText 
                ref={nameRef}
                type='text'
                name='name'
                id='contact-name-i'
                autocomplete='name'
                label='Name'
                aria='Write your name.'
                error={errors.name} 
            />
            <ContactFieldText
                ref={emailRef}
                type='email'
                name='email'
                id='contact-email-i'
                autocomplete='email'
                label='Email'
                aria='Write your email.'
                error={errors.email} 
            />
            <ContactTextAreaField 
                ref={messageRef}
                id='contact-message-t'
                name='message'
                aria='Contact Form'
                label='Write your message...'
                cols='20'
                rows='7'
                error={errors.message} 
            />
            {children}
        </form>
    )
}

export default ContactForm;