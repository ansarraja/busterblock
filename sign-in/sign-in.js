import { createForm } from "./createform.js";

(function () {

    const mainEl = $("#form-display");
    mainEl.empty();

    let logIn = localStorage.getItem('login');

    if (!logIn) {

        const signUpCard = $('<div>');
        signUpCard.addClass('login-card d-flex justify-content-center align-items-center');

        const signInContainer = $('<div>');
        signInContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-in-container');

        const signInButton = $('<button>');
        signInButton.text('Sign In');
        signInButton.addClass('sign-in-btn')
        signInButton.attr('id', 'sign-in');

        signInButton.on('click', () => {

            createForm(true, mainEl);

        })

        signUpCard.append(signInButton);
        signInContainer.append(signUpCard);

        mainEl.append(signInContainer);

        const signInCard = $('<div>');
        signInCard.addClass('login-card d-flex justify-content-center align-items-center');

        const signUpContainer = $('<div>');
        signUpContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-up-container');

        const signUpButton = $('<button>');
        signUpButton.text('Create Account');
        signUpButton.addClass('sign-up-btn')
        signUpButton.attr('id', 'sign-up');

        signUpButton.on('click', () => {

            createForm(false, mainEl);

        })

        signInCard.append(signUpButton);
        signUpContainer.append(signInCard);

        mainEl.append(signUpContainer);

    }

    else {

        const welcomeContainer = $('<div>');
        welcomeContainer.addClass('welcome-container d-flex justify-content-center align-items-center');

        const welcomeCard = $('<div>');
        welcomeCard.addClass('welcome-card d-flex flex-column justify-content-center align-items-center');

        const welcomeMessage = $('<h2>');

        welcomeMessage.text(`Hello ${logIn}, Welcome back!`);

        const logOutBtn = $('<button>');
        logOutBtn.text("Log Out");
        logOutBtn.addClass('log-out-btn');

        logOutBtn.on('click', () => {

            localStorage.removeItem('login');

            location.reload();

        })

        welcomeCard.append(welcomeMessage, logOutBtn);

        welcomeContainer.append(welcomeCard);

        mainEl.append(welcomeContainer);

    }


})();