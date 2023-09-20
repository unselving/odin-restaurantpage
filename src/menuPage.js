function menuPage () {
    const content = document.getElementById("content");
    content.innerHTML="";
    const headline = document.createElement("h1");
    const headlineText = document.createTextNode("Diner Menu");
    headline.appendChild(headlineText);
    const welcome = document.createElement("p")
    const welcomeText = document.createTextNode("At Lucy's Night Shift Diner, we serve an array of delicious foods, from classic milkshakes to black coffee for all the bitter lovers.");
    welcome.appendChild(welcomeText);
    content.appendChild(headline);
    content.appendChild(welcome);

}

export {menuPage};