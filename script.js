let scaleFactor = 1;
let modalImage = document.querySelector('#thanks-modal .modal-content img');

const scaleImage = () => {
    scaleFactor = (scaleFactor === 1) ? 0.8 : 1;
    modalImage.style.transform = `scale(${scaleFactor})`;
};


// TODO: Query for button with an id "theme-button"
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

const addSignature = (person) => {
    const newSignature = document.createElement('p');
    newSignature.innerText = `🖊️ ${person.name} from ${person.hometown} supports this.`;

    const signaturesSection = document.querySelector('.signatures');
    signaturesSection.appendChild(newSignature);

    const oldCounter = document.querySelector('#counter');
    oldCounter.remove();

    count += 1;

    const newCounter = document.createElement('p');
    newCounter.id = 'counter';
    newCounter.innerText = `🖊️ ${count} people have signed this petition and support this cause.`;
    signaturesSection.appendChild(newCounter);

  // Toggle the modal after adding the signature
  toggleModal(person);
}


const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
      name: document.querySelector('#name').value,
      hometown: document.querySelector('#hometown').value,
      email: document.querySelector('#email').value
  }

  for (let i = 0; i < petitionInputs.length - 1; i++) {
      if (petitionInputs[i].value.length < 2) {
          containsErrors = true;
          petitionInputs[i].classList.add('error');
      } else {
          petitionInputs[i].classList.remove('error');
      }
  }

  if (!person.email.includes('.com')) {
      containsErrors = true;
      document.querySelector('#email').classList.add('error');
  } else {
      document.querySelector('#email').classList.remove('error');
  }

  if (!containsErrors) {
      addSignature(person);
      for (let i = 0; i < petitionInputs.length; i++) {
          petitionInputs[i].value = "";
      }
  }
}

signNowButton.addEventListener('click', validateForm);


let count = 3;


let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};

// Select all revealable containers
let revealableContainers = document.querySelectorAll('.revealable');

let lastScrollTop = 0; // Variable to store the last scroll position

const reveal = () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;

    for (let i = 0; i < revealableContainers.length; i++) {
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
                revealableContainers[i].classList.add('active');
            }
        } else {
            // Scrolling up
            revealableContainers[i].classList.remove('active');
        }
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Update lastScrollTop
};

window.addEventListener('scroll', reveal);

// Attach the reveal function to the window scroll event
window.addEventListener('scroll', reveal);


const toggleModal = (person) => {
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('thanks-modal-content');

    // Update the modal content with the person's details
    modalContent.textContent = `Thank you, ${person.name}, from ${person.hometown}, for your support in Baby Care Hub!`;

    // Display the modal
    modal.style.display = 'flex';

  // Interval for image scaling animation
  let intervalId = setInterval(scaleImage, 500);

    // Hide the modal after a few seconds and clear the interval
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 5000); // Adjust the time as needed

    // Select the close button and add click event listener to close the modal
    const closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = () => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    };
};


// Function to close the modal
const closeModal = () => {
    const modal = document.getElementById('thanks-modal');
    modal.style.display = 'none';
};




