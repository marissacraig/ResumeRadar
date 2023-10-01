async function editApplicationFormHandler(event) {
  event.preventDefault();

  let title = document.getElementById('jobTitle').value.trim();
  let company = document.getElementById('company').value.trim();
  let status = document.getElementById('status').value.trim();
  const location = document.getElementById('location').value.trim();
  const url = document.getElementById('companyURL').value.trim();
  const description = document.getElementById('description').value.trim();
  const salary = document.getElementById('salary').value.trim();

  //get id of application
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);

  // Get custom text input values for fields that have "other" option selected
  if (title == "Other") {
    title = document.getElementById('otherJobTitle').value.trim();;
  }
  if (company == "Other") {
    company = document.getElementById('otherCompany').value.trim();
  }
  if (status == "Other") {
    status = document.getElementById('otherStatus').value.trim();
  }

  if (title && company && status && location && url && description && salary) {
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

async function deleteApplicationButtonHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (id) {
    const response = await fetch(`/api/applications/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.edit-application-form').addEventListener('submit', editApplicationFormHandler);
document.querySelector('#delete-application-btn').addEventListener('click', deleteApplicationButtonHandler);
