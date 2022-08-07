// function to add multiple classes
var superAdd = function (element, class0, class1, class2, class3) {
    element.classList.add(class0);
    element.classList.add(class1);
    element.classList.add(class2);
    element.classList.add(class3);
}

var superRemove = function (element, class0, class1, class2, class3) {
    element.classList.remove(class0);
    element.classList.remove(class1);
    element.classList.remove(class2);
    element.classList.remove(class3);
}

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById("dark-mode-toggle");
//console.log(darkModeToggle);

const enableDarkMode = () => {
    // 1. Add the class to the body
    var body = document.body;
    body.classList.add("body-dark");

    // Button DarkMode
    var moonLogo = document.getElementById("moonLogo");
    moonLogo.toggleAttribute("hidden");

    var sunLogo = document.getElementById("sunLogo");
    sunLogo.toggleAttribute("hidden");

    var btnDarkMode = document.getElementById("dark-mode-toggle");
    superAdd(btnDarkMode, "border", "border-white", "bg-dark");

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    var body = document.body;
    body.classList.remove("body-dark");

    // Button DarkMode
    var moonLogo = document.getElementById("moonLogo");
    moonLogo.toggleAttribute("hidden");

    var sunLogo = document.getElementById("sunLogo");
    sunLogo.toggleAttribute("hidden");

    var btnDarkMode = document.getElementById("dark-mode-toggle");
    superRemove(btnDarkMode, "border", "border-white", "bg-dark");

    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});