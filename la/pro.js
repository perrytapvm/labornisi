import confetti from 'canvas-confetti';

// Create a new confetti instance
const myConfetti = confetti.create(document.getElementById('canvas'), {
  resize: true, // Automatically resize confetti on window resize
  useWorker: true, // Use a web worker to handle confetti physics
});

// Function to toggle the confetti animation
function toggleConfettiAnimation() {
  if (myConfetti.isRunning()) {
    myConfetti.stop();
  } else {
    myConfetti.start();
  }
}

// Example usage
toggleConfettiAnimation(); // Starts the animation
// ... some time later
toggleConfettiAnimation(); // Stops the animation
