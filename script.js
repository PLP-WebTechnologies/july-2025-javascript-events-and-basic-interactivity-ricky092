// ----- Background Color Changer -----
// Select the button
const colorBtn = document.getElementById('colorBtn');

// Function to generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener to change background color on button click
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// ----- Simple Counter -----
// Select counter display and buttons
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;

// Update counter display function
function updateCounter() {
  counterDisplay.textContent = count;
}

// Increase count by 1 on click
increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrease count by 1 on click (minimum 0)
decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// ----- Custom Form Validation -----
// Select form and input fields
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

const formMessage = document.getElementById('formMessage');

// Helper function to check email format
function isValidEmail(email) {
  // Basic regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Form submission event handler
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  ageError.textContent = '';
  formMessage.textContent = '';
  formMessage.style.color = 'green';

  let isValid = true;

  // Validate Name: required and at least 2 chars
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter at least 2 characters for name.';
    isValid = false;
  }

  // Validate Email: required and format
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Age: required, number, and 1-120
  const ageValue = parseInt(ageInput.value.trim(), 10);
  if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
    ageError.textContent = 'Please enter a valid age between 1 and 120.';
    isValid = false;
  }

  // If all valid, show success message
  if (isValid) {
    formMessage.textContent = `Thank you for signing up, ${nameInput.value.trim()}!`;
    form.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above and try again.';
  }
});
