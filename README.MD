# Udemy Course Checkbox Automation

This repository contains a script to automate the process of expanding all course sections and checking all checkboxes on Udemy course pages through the browser's developer console.

## Features
- Automatically expands all sections of a Udemy course.
- Automatically checks all checkboxes (e.g., lesson completion checkboxes) within a Udemy course.

## How to Use

### Step 1: Open the Udemy Course Page
Navigate to the Udemy course page where you want to automate the process.

### Step 2: Open the Browser Console
1. Right-click anywhere on the page and select **Inspect**.
2. In the Developer Tools, go to the **Console** tab.

### Step 3: Paste the Script
Copy and paste the following script into the console:

```javascript
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
