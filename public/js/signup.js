const btn = document.querySelector('.btn');
btn.disabled = true;

const verifyPassword = function() {
    const confirmPasswordValue = document.querySelector('#confirm-password-signup').value;
    const passwordValue = document.querySelector('#password-signup').value;
    const message = document.querySelector('#message');
    if (passwordValue !== confirmPasswordValue || passwordValue === "") {
        message.innerHTML = 'Password and Confirm Password must match'; 
        message.style.color = 'red';
        btn.disabled = true;
      } else {
        btn.disabled = false;
        message.innerHTML = "Password and Confirm Password match";
        message.style.color = 'green';
      }
    }; 

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
