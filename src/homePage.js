import headerImg from "./Nighthawks_by_Edward_Hopper_1942.jpg";

function homePage () {
    const content = document.getElementById("content");
    content.innerHTML="";
    const headline = document.createElement("h1");
    const headlineText = document.createTextNode("Welcome to Lucy's Night Shift Diner");
    headline.appendChild(headlineText);
    const welcome = document.createElement("p")
    const welcomeText = document.createTextNode("Trying to avoid someone with a 9-to-5? Drop by Lucy's Night Shift Diner, where you can pay for your coffee and leave before the sun comes up.");
    welcome.appendChild(welcomeText);
    const myHeaderImg = new Image();
    myHeaderImg.src = headerImg;
    myHeaderImg.setAttribute("id","headerImg");
    content.appendChild(myHeaderImg);
    content.appendChild(headline);
    content.appendChild(welcome);

}

export {homePage}