const EMAIL_REGEX = /^\s*(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\s*$/;

export const isValidEmail = (email) => !!email && email.length <= 300 && EMAIL_REGEX.test(email);
export const isValidName = (name) => !!name && name.length <= 300;
export const isValidMessage = (message) => !!message;

export const sendMail = (data) => fetch('https://formspree.io/f/xdorrewr', {
    method: 'POST',
    headers: {
        Accept: 'application/json'
    },
    body: JSON.stringify(data)
});