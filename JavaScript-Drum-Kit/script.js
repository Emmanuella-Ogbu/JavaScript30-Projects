function playSound(e) {

  // Step 1: Find the <audio> whose data-key matches the pressed key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // Step 2: Find the .key <div> with the same data-key
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  // Step 3: Guard clause — if no audio found (wrong key), stop immediately
  if (!audio) return;

  // Step 4: Add the .playing class to trigger the CSS animation
  key.classList.add('playing');

  // Step 5: Rewind to start so rapid keypresses overlap correctly
  audio.currentTime = 0;

  // Step 6: Play the sound
  audio.play();
  } 

  function removeTransition(e) {

  // Only act when the 'transform' property finishes transitioning
  // (other properties like border-color also fire transitionend — we ignore them)
  if (e.propertyName !== 'transform') return;

  // Remove .playing from whichever element triggered the transitionend event after played
  e.target.classList.remove('playing');
}

  // Get all .key elements as a real Array (querySelectorAll returns a NodeList)
const keys = Array.from(document.querySelectorAll('.key'));

// Add transitionend listener to every .key card
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listen for any keydown on the whole window, call playSound
window.addEventListener('keydown', playSound);