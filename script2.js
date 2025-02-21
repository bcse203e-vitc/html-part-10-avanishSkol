function submitOrder() {
    // Get selected pizza size
    const sizeRadioButtons = document.getElementsByName("size");
    let selectedSize = "";
    for (let i = 0; i < sizeRadioButtons.length; i++) {
        if (sizeRadioButtons[i].checked) {
            selectedSize = sizeRadioButtons[i].value;
        }
    }

    // Get selected toppings
    const toppingCheckboxes = document.getElementsByName("toppings");
    let selectedToppings = [];
    for (let i = 0; i < toppingCheckboxes.length; i++) {
        if (toppingCheckboxes[i].checked) {
            selectedToppings.push(toppingCheckboxes[i].value);
        }
    }

    // Generate the order summary
    let summary = `Pizza Size: ${selectedSize}<br>`;
    if (selectedToppings.length > 0) {
        summary += `Toppings: ${selectedToppings.join(", ")}`;
    } else {
        summary += "No toppings selected.";
    }

    // Display the order summary
    document.getElementById("orderSummary").innerHTML = summary;
}
