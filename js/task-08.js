const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    // const formData = new formData(event.currentTarget);
    const userEmail = event.currentTarget.elements.email.value;
    const userPassword = event.currentTarget.elements.password.value;

    if (userEmail === '' || userPassword === '') {
        alert ('Все поля должны быть заполнены!');
        form.reset();
    } else {
        console.log({userEmail, userPassword});
        form.reset();
    }


};
