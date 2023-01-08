export const logIn = (event, form, mainEl) => {
   
    const emailInput = document.getElementById('email').value;

    const passwordInput = document.getElementById('password').value;

    let getUsersArr = JSON.parse(localStorage.getItem('users'));

    console.log(getUsersArr);

    console.log(emailInput);

    const isCorrectEmail = getUsersArr.find(({ email }) => email === emailInput);

    console.log(isCorrectEmail);

    if(!isCorrectEmail.email || !(isCorrectEmail.password === passwordInput)) {

        let warningEl = $('<p>');

        warningEl.text("Password or email are not correct - please check");

        form.append(warningEl);

    }

    else {

        mainEl.empty();

        let responseContainer = $('<div>');
        responseContainer.addClass('d-flex flex-column align-items-center')

        let greenTick = $('<div>');
        greenTick.addClass('green-tick d-flex justify-content-center align-items-center m-3');
        let tick = $('<p>');
        tick.text("✓");
        greenTick.append(tick);

        let thankMessageEl = $('<h3>');

        thankMessageEl.text(`Thank you for logging in ${isCorrectEmail.name}!`);

        let homeLink = $('<a>');
        homeLink.text("Go back to homepage");
        homeLink.attr('href', '../index.html');

        responseContainer.append(greenTick, thankMessageEl, homeLink)

        mainEl.append(responseContainer);

        localStorage.setItem('login', isCorrectEmail.name);

    }
}