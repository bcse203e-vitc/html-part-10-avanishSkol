function generateTable() {
    // Get the number input by the user
    const number = parseInt(document.getElementById("numberInput").value);
    if (isNaN(number) || number < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    // Get the table element where the table will be displayed
    const table = document.getElementById("multiplicationTable");

    // Clear any previous table contents
    table.innerHTML = "";

    // Create the table rows and cells using a for loop
    for (let i = 1; i <= 10; i++) {
        const row = table.insertRow(); // Insert a new row

        const cell1 = row.insertCell(0); // First cell for the multiplier
        const cell2 = row.insertCell(1); // Second cell for the result

        // Set the content of the cells
        cell1.innerHTML = `${number} × ${i}`;
        cell2.innerHTML = number * i;
    }
}
