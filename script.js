//your JS code here. If required.
// Function to set a cookie with a given name, value, and expiration date
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get the value of a cookie with a given name
function getCookie(name) {
  const keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

// Function to apply user preferences from cookies
function applyUserPreferences() {
  const fontSize = getCookie('fontSize');
  const fontColor = getCookie('fontColor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  const fontSizeValue = fontSizeInput.value;
  const fontColorValue = fontColorInput.value;

  // Set cookies with user preferences
  setCookie('fontSize', fontSizeValue, 365);
  setCookie('fontColor', fontColorValue, 365);

  // Apply user preferences
  applyUserPreferences();
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', handleFormSubmit);

// Apply user preferences when the page loads
applyUserPreferences();
