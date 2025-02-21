function switchToDarkMode() {
    document.body.classList.remove('light-mode'); // Remove light mode class
    document.body.classList.add('dark-mode'); // Add dark mode class
}

function switchToLightMode() {
    document.body.classList.remove('dark-mode'); // Remove dark mode class
    document.body.classList.add('light-mode'); // Add light mode class
}
