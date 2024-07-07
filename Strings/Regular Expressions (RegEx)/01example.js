// Validate if a given string is a valid email address.
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("example@example.com")); // true
console.log(validateEmail("invalid_email.com")); // false
