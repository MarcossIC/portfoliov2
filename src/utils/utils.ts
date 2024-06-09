const EMAIL_REGEX = /^\s*(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\s*$/;

export const isValidEmail = (email: string)=> !!email && email.length <= 300 && EMAIL_REGEX.test(email);
export const isValidName = (name: string) => !!name && name.length <= 300;
export const isValidMessage = (message: string)=> !!message;

export const sendMail = (data: FormData) => fetch('https://formspree.io/f/xdorrewr', {
    method: 'POST',
    headers: {
        Accept: 'application/json'
    },
    body: JSON.stringify(data)
});