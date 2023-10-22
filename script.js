// Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.



// Step 1: Save the like button element in a variable 
let likeButton = document.getElementById('like-btn')

// Step 2: Create function to add likes. This function makes it so that the "0" goes up when you press the button. We'll talk more about functions in a later class! 
const addLike = () => {
	let likeCount = document.getElementById('like-count')
	let currentCount = parseInt(likeCount.innerText)
	likeCount.textContent = currentCount + 1
}

// Step 3: Create an event listener that increases the likes when the user presses the like button 
likeButton.addEventListener('click', addLike)

// Add your query for the sign now button here
const signNowButton = document.querySelector('#sign-now-button');

const addSignature = () => {
    // Write your code to manipulate the DOM here
  const name = document.querySelector('#name').value;
  const hometown = document.querySelector('#hometown').value;

  // Create a new paragraph element
  const newSignature = document.createElement('p');
  newSignature.innerText = `🖊️ ${name} from ${hometown} supports this.`;

  // Find where the signatures section is on the page
  const signaturesSection = document.querySelector('.signatures');

  // Add the new signature
  signaturesSection.appendChild(newSignature);

  // Remove old counter
  const oldCounter = document.querySelector('#counter');
  oldCounter.remove();

  // Increase count
  count = count + 1;

  // Create and append new counter
  const newCounter = document.createElement('p');
  newCounter.id = 'counter';
  newCounter.innerText = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesSection.appendChild(newCounter);
}


const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // Find the email input
  const email = document.getElementById('email');
  
  for (let i = 0; i < petitionInputs.length; i++) {

    // Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
    // Check for email validity
    if (!email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }

  
  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    // Reset containsErrors for the new form
    containsErrors = false;
  }
}
  

signNowButton.addEventListener('click', validateForm);

let count = 3;



