// Helper functions for validation
export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}
