import React, { forwardRef } from "react";

const ContactTextAreaField = forwardRef(({ name, id, label, error, aria, cols, rows }, ref) => {
    return (
        <div className="relative">
            <textarea
                ref={ref}
                name={name}
                id={id}
                role='textbox'
                aria-label={aria}
                autocapitalize='none'
                cols={cols}
                rows={rows}
                required
            ></textarea>
            <label htmlFor={id} className="label">{label}</label>
            <p className="error" id={error}></p>
        </div>
    );
});

export default ContactTextAreaField;