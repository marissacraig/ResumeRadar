function verifyPassword() {
  const btn = document.querySelector('.btn');
  const confirmPasswordValue = document.querySelector(
    '#confirm-password-signup'
  ).value;
  const passwordValue = document.querySelector('#password-signup').value;
  const message = document.querySelector('#message');
  if (passwordValue !== confirmPasswordValue || passwordValue === '') {
    message.innerHTML = 'Password and Confirm Password must match';
    message.style.color = 'red';
    btn.disabled = true;
  } else {
    btn.disabled = false;
    message.innerHTML = 'Password and Confirm Password match';
    message.style.color = 'green';
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonedRes = await response.json();
    alert(jsonedRes.message);

    if (response.ok) {
      document.location.replace('/login');
    }
  }
};

const signup = document.querySelector('.signup-form');
signup.addEventListener('submit', signupFormHandler);
