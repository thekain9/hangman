export function showNotification(setter) {
    // Set the notification state to true
    setter(true);

    // After 2000 milliseconds (2 seconds), set the notification state to false
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    // Initialize the status to "win"
    let status = "win";

    // Checking for a win by iterating through each letter in the word
    word.split('').forEach(letter => {
        // If the letter is not in the correct letters array, set status to an empty string
        if (!correct.includes(letter)) {
            status = '';
        }
    });

    // Check for a loss (when wrong letters reach a count of 9), set status to "lose"
    if (wrong.length === 9) {
        status = "lose";
    }

    // Return the final status ("win," "lose," or an empty string)
    return status;
}
