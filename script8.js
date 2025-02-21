function updateStates() {
    const country = document.getElementById('country').value;
    const stateDropdown = document.getElementById('state');

    // Clear the state dropdown
    stateDropdown.innerHTML = '<option value="">Select a state</option>';

    // Declare a states object where keys are countries and values are arrays of states
    const states = {
        "USA": ["California", "Texas", "New York", "Florida", "Illinois"],
        "India": ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai"],
        "UK": ["England", "Scotland", "Wales", "Northern Ireland"]
    };

    // Populate the state dropdown based on the selected country
    if (country && states[country]) {
        states[country].forEach(function(state) {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });
    }
}
