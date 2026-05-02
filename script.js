// Function to handle the palindrome logic
function checkPalindrome() {
    // Access the input element by ID
    const inputElement = document.getElementById("userInput");
    // Access the display element for results
    const display = document.getElementById("resultDisplay");
    // Get the raw value from the input
    const rawInput = inputElement.value;

    // Requirement: Remove spaces and convert to lowercase for accurate checking
    const cleanedString = rawInput.replace(/\s+/g, '').toLowerCase();
    
    // Check if the input is empty or just spaces (Validation)
    if (cleanedString === "") {
        display.innerHTML = "<span style='color: red;'>Please enter a valid word.</span>";
        return;
    }

    // Logic: Convert string to array, reverse it, and join it back
    const reversedString = cleanedString.split('').reverse().join('');

    // Compare the cleaned original to the reversed version
    if (cleanedString === reversedString) {
        // Use innerHTML to show success message
        display.innerHTML = `<span style='color: green;'>"${rawInput}" is a palindrome! ✨</span>`;
    } else {
        // Use innerHTML to show failure message
        display.innerHTML = `<span style='color: #d9534f;'>"${rawInput}" is not a palindrome.</span>`;
    }
}

// Requirement: No actionListeners, so we use the onsubmit property of the form
const myForm = document.getElementById("palindromeForm");

// Assigning the function to the onsubmit event
myForm.onsubmit = function(event) {
    // Prevent the page from refreshing on form submit
    event.preventDefault();
    // Run the palindrome check
    checkPalindrome();
};