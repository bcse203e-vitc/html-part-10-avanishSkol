document.getElementById('userInput').addEventListener('input', function () {
    const text = this.value;

    // Calculate character count
    const charCount = text.length;

    // Calculate word count by splitting the text by spaces and filtering out empty words
    const wordCount = text.trim() ? text.split(/\s+/).length : 0;

    // Update the character count and word count on the page
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = wordCount;

    // Show alert if character count exceeds 200
    const charAlert = document.getElementById('charAlert');
    if (charCount > 200) {
        charAlert.style.display = 'block';  // Show the alert
    } else {
        charAlert.style.display = 'none';  // Hide the alert
    }
});
