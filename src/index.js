import './style.css';
import {homePage} from './homePage.js';
import {menuPage} from './menuPage.js';
import {contactPage} from './contactPage.js';



function createLinks () {
    const menu = document.getElementById("menu");
    const link1 = document.createElement("a");
    link1.setAttribute("id","link1");
    const link1Text = document.createTextNode("Home")
    link1.appendChild(link1Text);
    const link2 = document.createElement("a");
    link2.setAttribute("id","link2");
    const link2Text = document.createTextNode("Menu")
    link2.appendChild(link2Text);
    const link3 = document.createElement("a");
    link3.setAttribute("id","link3");
    const link3Text = document.createTextNode("Contact")
    link3.appendChild(link3Text);
    menu.appendChild(link1);
    menu.appendChild(link2);
    menu.appendChild(link3);

}

function linkNavigation () {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    link1.onclick = homePage;
    link2.onclick = menuPage;
    link3.onclick = contactPage;
}


createLinks();
linkNavigation();


homePage();