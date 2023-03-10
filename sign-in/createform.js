import { logIn } from "./login.js";
import { createAccount } from "./createaccount.js";

export const createForm = (isRegistered, mainEl) => {

    mainEl.empty();

    const form = $('<form>');
    form.addClass('d-flex flex-column')

    const formContentContainer = $('<div>');
    formContentContainer.addClass('form-content-container d-flex justify-content-center align-items-center');

    const formContainer = $('<div>');
    formContainer.addClass('form-container');

    if (!isRegistered) {

        let heading = $('<h2>');
        heading.text('Create Account');

        let nameLabel = $('<label>');
        nameLabel.text("Name")
        nameLabel.attr('for', 'name');

        let nameInput = $('<input>');
        nameInput.attr('id', 'name');

        let emailLabel = $('<label>');
        emailLabel.text("E-Mail");
        emailLabel.attr('for', 'email');

        let emailInput = $('<input>');
        emailInput.attr('id', 'email');
        emailInput.attr('type', 'email');

        let passwordLabel = $('<label>');
        passwordLabel.text("Password");
        passwordLabel.attr('for', 'password');

        let passwordInput = $('<input>');
        passwordInput.attr('id', 'password');

        let passwordConfirmLabel = $('<label>');
        passwordConfirmLabel.text("Confirm Password");
        passwordConfirmLabel.attr('for', 'password-confirm');

        let passwordConfirmInput = $('<input>');
        passwordConfirmInput.attr('id', 'password-confirm');

        let createAccountBtn = $('<button>');
        createAccountBtn.text("Create My Account");
        createAccountBtn.attr('id', 'create-account-btn')
        createAccountBtn.attr('type', 'submit');

        let warningEl = $('<p>');
        warningEl.attr('id', 'warning');

        createAccountBtn.on('click', (event) => {

            event.preventDefault();

            createAccount(event, form, mainEl);

        })



        form.append(heading, nameLabel, nameInput, emailLabel, emailInput, passwordLabel, passwordInput, passwordConfirmLabel, passwordConfirmInput, createAccountBtn, warningEl);

        formContainer.append(form);

        formContentContainer.append(formContainer);

        mainEl.append(formContentContainer);

    }

    else {

        let heading = $('<h2>');
        heading.text('Log In');

        let emailLabel = $('<label>');
        emailLabel.text("E-Mail");
        emailLabel.attr('for', 'email');

        let emailInput = $('<input>');
        emailInput.attr('id', 'email');
        emailInput.attr('type', 'email');

        let passwordLabel = $('<label>');
        passwordLabel.text("Password");
        passwordLabel.attr('for', 'password');

        let passwordInput = $('<input>');
        passwordInput.attr('id', 'password');

        let logInBtn = $('<button>');
        logInBtn.text("Log In");
        logInBtn.attr('type', 'submit');

        let warningEl = $('<p>');
        warningEl.attr('id', 'warning');


        logInBtn.on('click', (event) => {
            event.preventDefault();
            logIn(event, form, mainEl);

        })

        form.append(heading, emailLabel, emailInput, passwordLabel, passwordInput, logInBtn, warningEl);

        formContainer.append(form);

        formContentContainer.append(formContainer);

        mainEl.append(formContentContainer);
    }

};