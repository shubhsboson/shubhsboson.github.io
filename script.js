const sun = document.getElementById("sun_icon");
const moon = document.getElementById("moon_icon");

const darkModeMediaQuery = window.matchMedia("prefers-color-scheme: dark");

let darkMode = darkModeMediaQuery.matches;

if (darkMode) {
    document.body.classList.add("dark_mode");
    sun.setAttribute("display", "none");
}
else {
    moon.setAttribute("display", "none");
}

function toggleDarkMode() {
    darkMode = !darkMode;

    document.body.classList.toggle("dark_mode");

    if (darkMode) {
        sun.setAttribute("display", "block");
        moon.setAttribute("display", "none");
    }
    else {
        sun.setAttribute("display", "none");
        moon.setAttribute("display", "block");
    }
}