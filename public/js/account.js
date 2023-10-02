async function editPasswordFormHandler(event) {
    event.preventDefault();
  
    let password = document.getElementById('').value.trim();
    
    // Get id of user
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    // Get custom text input values for fields that have "other" option selected
    if (!password) {
      alert('Please enter a new password')
    }
    if (company == "Other") {
      company = document.getElementById('otherCompany').value.trim();
    }
   

    if (password) {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, company, status, location, url, description, salary }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
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
      const response = await fetch(`/api/users/${id}`, {
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
  
  document.querySelector('edit-password')
  .addEventListener('submit', editPasswordFormHandler);

  const deleteAccount = document.querySelector('#delete-account');
  deleteAccount.addEventListener('click', deleteAccountBtn);