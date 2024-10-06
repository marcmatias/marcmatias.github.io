// Button theme icons
const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/></svg>`

const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>`

const display = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z"/></svg>`

// Função para alternar o tema
const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || '';
  let newTheme;

  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else if (currentTheme === 'dark') {
    newTheme = 'system';
  } else {
    newTheme = 'light';
  }

  localStorage.setItem('theme', newTheme);
  applyTheme();
}

// Function to apply theme to html and change theme button icon
const applyTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const htmlElement = document.documentElement;
  const buttonTheme = document.querySelectorAll(".btn-theme");
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Remove all htmlElement theme classes
  htmlElement.classList.remove('light', 'dark');

  if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
    buttonTheme.forEach(button => {
      button.innerHTML = moon;
      button.title = "Tema escuro";
    });
  } else if (currentTheme === 'light') {
    htmlElement.classList.add('light');
    buttonTheme.forEach(button => {
      button.innerHTML = sun
      button.title = "Tema iluminado";
    })
  } else {
    if (prefersDarkScheme) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.add('light');
    }
    buttonTheme.forEach(button => {
      button.innerHTML = display;
      button.title = "Tema do sistema";
    })
  }
}

// Set theme before elements loaded
(function () {
  applyTheme();
})()

// BackButton FowardButton work with theme updated by user
document.onvisibilitychange = window.onunload = window.onbeforeunload = function() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "system") {
    currentTheme = prefersDarkScheme ? "dark" : "light";
  }

  const htmlElement = document.documentElement;

  if (![...htmlElement.classList].includes(currentTheme)) {
    applyTheme();
  }
}

// Apply theme when page loads updating buttons icon
document.addEventListener('DOMContentLoaded', applyTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  applyTheme();
})
