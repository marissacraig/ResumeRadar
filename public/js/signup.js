function verifyPassword() {
  const btn = document.querySelector('.btn');
  const confirmPasswordValue = document.querySelector('#confirm-password-signup').value;
  const passwordValue = document.querySelector('#password-signup').value;
  const message = document.querySelector('#message');
  if (passwordValue !== confirmPasswordValue || passwordValue === '') {
    message.innerHTML = 'Password and Confirm Password must match';
    message.style.color = 'red';
    btn.disabled = true;
  } else {
    btn.disabled = false;
    message.innerHTML = "Password and Confirm Password match";
    message.style.color = 'green';
  }
} 

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (name && username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const jsonedRes = await response.json();
      alert(jsonedRes.message);
      if (response.ok) {
        document.location.replace('/login');
      }
    }
  };

document.querySelector('.signup-form')
document.addEventListener('submit', signupFormHandler());
