function toggleTheme() {
  const html = document.querySelector('html');

  if (localStorage.getItem('color-scheme')  === 'dark') {
    html.classList.remove('dark');
    localStorage.setItem('color-scheme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('color-scheme', 'dark');
  }
}

// Toggle user OS theme if user not select a theme
function setThemeOnLoad() {
  const colorScheme = localStorage.getItem('color-scheme');

  if (colorScheme) {
    const html = document.querySelector('html');

    if ( 
      colorScheme === 'dark'
    ) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleTheme();
  }
}

(function () {
  setThemeOnLoad();
})()

// BackButton FowardButton work with theme updated by user
document.onvisibilitychange = window.onunload = window.onbeforeunload = function() {
  setThemeOnLoad();
}
