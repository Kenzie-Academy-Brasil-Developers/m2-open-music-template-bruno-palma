/* Desenvolva sua lógica aqui ... */

const buttonTheme = document.querySelector(".header__btn");

const html = document.querySelector("html");

let darkMode = false;

const themeChange = () => {
  darkMode = !darkMode;

  html.classList.toggle("dark-mode");
  buttonTheme.classList.toggle("header__btn--dark-mode");

  localStorage.setItem("@openMusic:darkMode", JSON.stringify(darkMode));
};

const themeAnalysis = () => {
  darkMode = JSON.parse(localStorage.getItem("@openMusic:darkMode"));

  if (darkMode) {
    html.classList.add("dark-mode");
    buttonTheme.classList.add("header__btn--dark-mode");
  }
};

buttonTheme.addEventListener("click", themeChange);
themeAnalysis();
