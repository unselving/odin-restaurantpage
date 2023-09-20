function contactPage () {
    const content = document.getElementById("content");
    content.innerHTML="";
    const headline = document.createElement("h1");
    const headlineText = document.createTextNode("Welcome to Lucy's Night Shift Diner");
    headline.appendChild(headlineText);
    const welcome = document.createElement("p")
    const welcomeText = document.createTextNode("We're sorry, the number you have tried to reach is not available.");
    welcome.appendChild(welcomeText);
    content.appendChild(headline);
    content.appendChild(welcome);

}

export {contactPage};