import { createForm } from "./createform.js";

(function() {

    const mainEl = $("#form-display");
    mainEl.empty();

    let logIn = localStorage.getItem('login');

    if(!logIn) {

        const signInContainer = $('<div>');
        signInContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-in-container');
    
        const signInButton = $('<button>');
        signInButton.text('Sign In');
        signInButton.addClass('sign-in-btn')
        signInButton.attr('id', 'sign-in');
    
        signInButton.on('click', () => {
    
            createForm(true, mainEl);
    
        })
    
        signInContainer.append(signInButton);
        mainEl.append(signInContainer);
    
        const signUpContainer = $('<div>');
        signUpContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-up-container');
    
        const signUpButton = $('<button>');
        signUpButton.text('Create Account');
        signUpButton.addClass('sign-up-btn')
        signUpButton.attr('id', 'sign-up');
    
        signUpButton.on('click', () => {
    
            createForm(false, mainEl);
    
        })
    
        signUpContainer.append(signUpButton);
        mainEl.append(signUpContainer);
        
    }

    else {

        const welcomeMessage = $('<h2>');

        welcomeMessage.text(`Hello ${logIn}, Welcome back`);

        const logOutBtn = $('<button>');
        logOutBtn.text("Log Out");
        logOutBtn.addClass('log-out-btn');

        logOutBtn.on('click', () => {

            localStorage.removeItem('login');

            location.reload();

        })

        mainEl.append(welcomeMessage, logOutBtn);

    }
    

    // const signInContainer = $('<div>');
    // signInContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-in-container');

    // const signInButton = $('<button>');
    // signInButton.text('Sign In');
    // signInButton.addClass('sign-in-btn')
    // signInButton.attr('id', 'sign-in');

    // signInButton.on('click', () => {

    //     createForm(true, mainEl);

    // })

    // signInContainer.append(signInButton);
    // mainEl.append(signInContainer);

    // const signUpContainer = $('<div>');
    // signUpContainer.addClass('col-md-6 col-12 d-flex justify-content-center align-items-center sign-up-container');

    // const signUpButton = $('<button>');
    // signUpButton.text('Create Account');
    // signUpButton.addClass('sign-up-btn')
    // signUpButton.attr('id', 'sign-up');

    // signUpButton.on('click', () => {

    //     createForm(false, mainEl);

    // })

    // signUpContainer.append(signUpButton);
    // mainEl.append(signUpContainer);
   



})();