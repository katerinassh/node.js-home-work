const data = {
    name: document.querySelector('.inp-name'),
    surname: document.querySelector('.inp-surname'),
    login: document.querySelector('.inp-login'),
    password: document.querySelector('.inp-pwd'),
    email: document.querySelector('.inp-mail'),
    dob: document.querySelector('.inp-date')
};

document.querySelector('.form-registration').addEventListener('submit', event => {
    event.preventDefault();

    const name = data.name.value;
    const surname = data.surname.value;
    const login = data.login.value;
    const password = data.password.value;
    const email = data.email.value;
    const dob = data.dob.value.split('-');

    if (validation(name, surname, login, password, email, dob)) {
        const url = `http://localhost:8080?type=reg&name=${ name }&surname=${ surname }&login=${ login }&password=${password}&email=${ email }&dob=${ dob[0] }-${ dob[1] }-${ dob[2] }`;

        console.log(url);
    
        fetch(url)
            .then(res => res.text())
            .then(console.log(res))
            .catch(error => console.log(error));
    } 
});

const validation = (name, surname, login, password, email, dob) => {
    let valid = true;
    
    if (typeof name !== 'string' || name.length < 1 || name.length > 50) {
        data.name.style.cssText = 'border: 1px solid red';
        valid = false;
    }
    if (typeof surname !== 'string' || surname.length < 1 || surname.length > 50) {
        data.surname.style.cssText = 'border: 1px solid red';
        valid = false;
    }
    if (typeof login !== 'string' || login.length < 1 || login.length > 50) {
        data.login.style.cssText = 'border: 1px solid red';
        valid = false;
    }
    if (typeof password !== 'string' || password.length < 6 || password.length > 50) {
        data.password.style.cssText = 'border: 1px solid red';
        valid = false;
    }

    return valid;
};

// const changeBorder = (elem) => {

// }