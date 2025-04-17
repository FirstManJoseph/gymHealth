/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
// ===================================================
function freeTrial() {
  alert('Try our Free gym for 2 hours.');
}
// ===================================================

// ========= INCREMENT & DECREMENT ======================
//=========================================================================

const counterDisplay = document.getElementById('counter');
const IncrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

//initialize the counter
let count = 0;

//Increment
incrementButton.addEventListener('click', function () {
  count += 1; //increment by 1
  counterDisplay.textContent = count;
});

decrementButton.addEventListener('click', function () {
  count -= 1;
  counterDisplay.textContent = count;
});
//=========================================================================
// ========= FORMS ======================
//=========================================================================

const usernameInput = document.getElementById('username');
const greetingButton = document.getElementById('greetingButton');
const greetingMessage = document.getElementById('greetingMessage');

//get the references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
  const namePattern = /[a-zA-Z\s]+$/; // Regular expression to allow only letters and
  return namePattern.test(name);
}

//Add an event listener to the button
greetingButton.addEventListener('click', function () {
  // Get the value of the input
  const username = usernameInput.value.trim();
  greetingMessage.textContent = `Hello! ${username}!`;

  //Check if the input is not empty and is valid
  if (username === '') {
    greetingMessage.textContent = 'Please enter your name.';
  } else if (!isValidName(username)) {
    greetingMessage.textContent = 'Invallid input. Please use only letters';
  } else {
    greetingMessage.textContent = `Welcome ${username}!`;
  }
});

//=========================================================================
// ========= DOM ======================
//=========================================================================
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {
  const newParagraph = document.createElement('p');
  newParagraph.textContent =
    'Enjoy your time in Gym Health! Stay Healthy! Stay Good!';

  paragraphContainer.appendChild(newParagraph);
});
// ===================================================

document.querySelector('.logo').addEventListener('click', function () {
  location.reload();
});

document.querySelector('#findGym').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(mapBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#training').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(trainingsBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#whyJoinUs').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(whyJoinUsBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#eqptmnt').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(eqptmntBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#contactUs').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(contactBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

// ===================================================
