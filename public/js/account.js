const editName = document.querySelector('edit-name');
const editUsername = document.querySelector('edit-username');
const editEmail = document.querySelector('edit-email');
const editPassword = document.querySelector('edit-password');
const deleteAccount = document.querySelector('#delete-account');

async function editNameFormHandler(event) {
    event.preventDefault();
  
    let name = document.getElementById('newName');
    
    // Get id of user
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    // Get custom text input values for fields that have "other" option selected
    if (!name) {
      alert('Please enter a new Name')
    }
    if ( name == '') {
      name = document.getElementById('newName').value.trim();
    }
   
    if (name) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function editUsernameFormHandler(event) {
    event.preventDefault();
  
    let username = document.getElementById('edit-username');
    
    // Get id of user
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    // Get custom text input values for fields that have "other" option selected
    if (!username) {
      alert('Please enter a new username')
    }
    if (username == '') {
      username = document.getElementById('edit-username').value.trim();
    }
   
    if (username) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ username }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function editEmailFormHandler(event) {
    event.preventDefault();
  
    let email = document.getElementById('edit-email');
    
    // Get id of user
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    // Get custom text input values for fields that have "other" option selected
    if (!email) {
      alert('Please enter a new email')
    }
    if (email == '') {
      email = document.getElementById('edit-email').value.trim();
    }
   
    if (email) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
    }
  }
  
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
  async function editPasswordFormHandler(event) {
    event.preventDefault();
  
    let password = document.getElementById('confirmNewPassword');
    
    // Get id of user
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    // Get custom text input values for fields that have "other" option selected
    if (!password) {
      alert('Please enter a new password')
    }
    if (password == '') {
      password = document.getElementById('confirmNewPassword').value.trim();
    }
   
    if (password) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function deleteAccountBtn(event) {
    event.preventDefault();
  
    const confirm = confirm('Are you sure you want to delete your account?');
        if (confirm) {
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (id) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }}}
  
editName.addEventListener('submit', editNameFormHandler);
editUsername.addEventListener('submit', editUsernameFormHandler);
editEmail.addEventListener('submit', editEmailFormHandler);
editPassword.addEventListener('submit', editPasswordFormHandler);
deleteAccount.addEventListener('click', deleteAccountBtn);