let email;
let password;
let check = 0;
let five = 5;
email = prompt('Input email: ');
if(email === '' || email === null){
    alert('Canceled');
    check = 1;
} else if(email.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols');
    check = 1;
} else {
    let checkEmail = email === 'user@gmail.com' || email === 'admin@gmail.com';
    if(!checkEmail) {
        alert('I don\'t know you');
        check = 1;
    }
}
if(!check) {
    password = prompt('Input password: ');
    if(password === '' || password === null){
        alert('Canceled.');
        check = 1;
    } else {
        let checkCredentials = email === 'user@gmail.com' && password === 'UserPass' ||
                               email === 'admin@gmail.com' && password === 'AdminPass';
        if(!checkCredentials) {
            alert('Wrong password.');
            check = 1;
        }
    }
}
if(!check){
    let temp = confirm('Do you want to change your password?');
    if (temp === true) {
            temp = prompt('Input your old password: ');
            if(temp === '' || temp === null){
                alert('Canceled.');
                check = 1;
            } else if(password !== temp) {
                alert('Wrong password.');
                check = 1;
            } else {
                let newPass;
                newPass = prompt('Input new password: ');
                let six = 6;
                if(newPass === '' || newPass === null) {
                    alert('Canceled.');
                    check = 1;
                } else if(newPass.length < six){
                    alert('It\'s too short password. Sorry.');
                    check = 1;
                }
                if(!check){
                    let repeatPass = prompt('Input new password again: ');
                    if(repeatPass === newPass){
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                        check = 1;
                    }
                }
            }
    } else if(!check) {
        alert('Yout failed the change.');
    }
}