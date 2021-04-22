exports.validation = function (name, surname, login, password, email, dob) {
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
    if (typeof password !== 'string' || password.length < 6 || password.length > 50 || /^.*(?=.{6,50})(?=.*d)(?=.*[A-Z])(?=.[a-z])/.test(password)) {
        data.password.style.cssText = 'border: 1px solid red';
        valid = false;
    }
    if (typeof email !== 'string' || /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/.test(email)) {
        data.email.style.cssText = 'border: 1px solid red';
        valid = false;
    }
    
    return valid;
};
