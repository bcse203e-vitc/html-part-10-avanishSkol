// Get the buttons by their IDs
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");

// Function to change the background color to red
redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

// Function to change the background color to blue
blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});
