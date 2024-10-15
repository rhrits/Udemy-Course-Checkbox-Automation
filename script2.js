// Step 2: Check all checkboxes by clicking the checkbox elements
document.querySelectorAll('.ud-fake-toggle-input.ud-fake-toggle-checkbox').forEach(checkbox => {
    // Simulate a click event for each checkbox
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    checkbox.dispatchEvent(event);  // Dispatch click event
});