// Step 1: Expand all sections by clicking the expand icon
document.querySelectorAll('.accordion-panel-module--expand-icon--knJ5Q').forEach(icon => {
    // Use the parent element or dispatch a mouse event to simulate a click
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    icon.dispatchEvent(event);  // Dispatch click event
});