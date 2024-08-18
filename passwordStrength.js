// passwordStrength.js
function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/\d/)) strength++;
  if (password.match(/[\W]/)) strength++;

  let strengthText = "";
  let strengthClass = "";

  if (strength <= 2) {
    strengthText = "Weak";
    strengthClass = "weak";
  } else if (strength === 3) {
    strengthText = "Medium";
    strengthClass = "medium";
  } else if (strength >= 4) {
    strengthText = "Strong";
    strengthClass = "strong";
  }

  const feedbackElement = document.getElementById("password-strength-feedback");
  feedbackElement.textContent = `Password Strength: ${strengthText}`;
  feedbackElement.className = `password-strength ${strengthClass}`;
  feedbackElement.style.display = "block";
}
