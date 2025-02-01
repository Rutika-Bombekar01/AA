// document.addEventListener("DOMContentLoaded", function() {
//     const wishButton = document.getElementById('wishButton');
//     const loveMessageDiv = document.getElementById('loveMessage');
//     const resetButton = document.getElementById('resetButton');
//     const heart = document.getElementById('heart');
//     const celebration = document.getElementById('celebration');
//     const backgroundMusic = document.getElementById('backgroundMusic');
//     const yourNameInput = document.getElementById('yourName');
//     const anandNameInput = document.getElementById('anandName');
    
//     // Encouraging messages
//     const messages = [
//         "You are going to ace this exam, Anand! I believe in you 💖",
//         "Good luck, Anand! Go give it your best shot, my love! 🍀",
//         "You're my superstar, Anand! Your hard work will pay off! 🌟",
//         "Anand, you've got this! Stay calm, focused, and crush it! 💪",
//         "No matter what, I’m proud of you, Anand! You’re amazing! 😘"
//     ];

//     // Play background music
//     backgroundMusic.play();

//     // When the user clicks the "Send Your Best Wishes" button
//     wishButton.addEventListener('click', function() {
//         const yourName = yourNameInput.value.trim() || "Your Girlfriend";
//         const anandName = anandNameInput.value.trim() || "Anand";

//         // Select a random message and personalize it
//         const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//         const personalizedMessage = randomMessage.replace("Anand", anandName);

//         loveMessageDiv.textContent = `${yourName} says: ${personalizedMessage}`;
//         loveMessageDiv.classList.add('show');
//         heart.classList.add('pulse');
        
//         // Trigger celebration effect
//         celebration.classList.add('active');
        
//         // Hide the "Wish You the Best" button and show the "Reset" button
//         wishButton.style.display = 'none';
//     });

//     // When the user clicks the "Reset Wishes" button
//     resetButton.addEventListener('click', function() {
//         loveMessageDiv.classList.remove('show');
//         wishButton.style.display = 'inline-block';
//         heart.classList.remove('pulse');
//         celebration.classList.remove('active');
        
//         // Reset inputs
//         yourNameInput.value = '';
//         anandNameInput.value = '';
//     });
// });















document.addEventListener("DOMContentLoaded", function() {
    const wishButton = document.getElementById('wishButton');
    const loveMessageDiv = document.getElementById('loveMessage');
    const resetButton = document.getElementById('resetButton');
    const heart = document.getElementById('heart');
    const celebration = document.getElementById('celebration');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const yourNameInput = document.getElementById('yourName');
    const anandNameInput = document.getElementById('anandName');
    
    // Encouraging messages
    const messages = [
        "You are going to ace this exam, Anand! I believe in you 💖",
        "Good luck, Anand! Go give it your best shot, my love! 🍀",
        "You're my superstar, Anand! Your hard work will pay off! 🌟",
        "Anand, you've got this! Stay calm, focused, and crush it! 💪",
        "No matter what, I’m proud of you, Anand! You’re amazing! 😘"
    ];

    // Play background music
    backgroundMusic.play();

    // When the user clicks the "Send Your Best Wishes" button
    wishButton.addEventListener('click', function() {
        const yourName = yourNameInput.value.trim() || "Your Girlfriend";
        const anandName = anandNameInput.value.trim() || "Anand";

        // Select a random message and personalize it
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const personalizedMessage = randomMessage.replace("Anand", anandName);

        loveMessageDiv.textContent = `${yourName} says: ${personalizedMessage}`;
        loveMessageDiv.classList.add('show');
        heart.classList.add('pulse');
        
        // Trigger celebration effect
        celebration.classList.add('active');
        
        // Hide the "Click Me" button and show the "Reset" button
        wishButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
    });

    // When the user clicks the "Reset Wishes" button
    resetButton.addEventListener('click', function() {
        loveMessageDiv.classList.remove('show');
        wishButton.style.visibility = 'visible';
        resetButton.style.visibility = 'hidden';
        heart.classList.remove('pulse');
        celebration.classList.remove('active');
        
        // Reset inputs
        yourNameInput.value = '';
        anandNameInput.value = '';
    });
});
