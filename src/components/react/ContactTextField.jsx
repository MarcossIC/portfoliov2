import React, { forwardRef } from "react";

const ContactTextField = forwardRef(({ type, name, id, autocomplete, label, error, aria }, ref) => {
    return (
        <div className="relative">
            <input
                ref={ref}
                type={type}
                name={name}
                id={id}
                autoComplete={autocomplete}
                role="textbox"
                aria-label={aria}
                autoCapitalize="none"
                placeholder=" "
                required
            />
            <label htmlFor={id} className="label">{label}</label>
            <p className="error" id={error}></p>
        </div>
    );
});

export default ContactTextField;