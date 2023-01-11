export const createAccount = (event, form, mainEl) => {

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    const passwordConfirm = document.getElementById('password-confirm').value;

    const warningEl = $('#warning');

    if (password != passwordConfirm) {

        warningEl.text("Password and Password Confirmation are not the same - please check");

    }

    else {
        let user = {

            name: name,

            email: email,

            password: password

        }

        let users = localStorage.getItem('users');

        let usersArr = [];

        if (!users) {

            usersArr.push(user);

            let usersArrStr = JSON.stringify(usersArr);

            localStorage.setItem('users', usersArrStr);

        }

        else {

            usersArr = JSON.parse(users);

            usersArr.push(user);

            let usersArrStr = JSON.stringify(usersArr);

            localStorage.setItem('users', usersArrStr);

        }


        mainEl.empty();

        let responseContainer = $('<div>');
        responseContainer.addClass('d-flex flex-column align-items-center')

        let greenTick = $('<div>');
        greenTick.addClass('green-tick d-flex justify-content-center align-items-center m-3');
        let tick = $('<p>');
        tick.text("✓");
        greenTick.append(tick);

        let thankMessageEl = $('<h3>');

        thankMessageEl.text(`Thank you for creating an account ${name}!`);

        let pleaseSignIn = $('<button>')
        pleaseSignIn.text("Please Sign In");
        pleaseSignIn.addClass('please-sign-in');

        pleaseSignIn.on('click', () => {

            location.reload();

        });

        let homeLink = $('<a>');
        homeLink.text("Go back to homepage");
        homeLink.attr('href', '../index.html');

        responseContainer.append(greenTick, thankMessageEl, pleaseSignIn, homeLink)

        mainEl.append(responseContainer);

    }

}