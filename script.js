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


