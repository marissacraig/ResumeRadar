const jobTitleElement = document.getElementById('otherJobTitle');
jobTitleElement.visibility = 'hidden';
const companyElement = document.getElementById('otherCompany');
companyElement.visibility = 'hidden';
const statusElement = document.getElementById('otherStatus');
statusElement.visibility = 'hidden';

function otherJobTitle(val) {
  if (val === 'Other') {
    jobTitleElement.style.visibility = 'visible',
    jobTitleElement.value = '',
  } else {
    jobTitleElement.style.visibility = 'hidden'
  }
};

function otherCompany(val) {
    if (val === 'Other') {
      companyElement.style.visibility = 'visible',
      companyElement.value = '',
    } else {
      companyElement.style.visibility = 'hidden'
    }
  };

  function otherStatus(val) {
    if (val === 'Other') {
      statusElement.style.visibility = 'visible',
      statusElement.value = '',
    } else {
      statusElement.style.visibility = 'hidden'
    }
  };

async function newApplicationFormHandler(event) {
    event.preventDefault();

    const title = document.getElementById('#jobTitle').value.trim();
    const company = document.getElementById('#company').value.trim();
    const status = document.getElementById('#status').value.trim();
    const location = document.getElementById('#location').value.trim();
    const url = document.getElementById('#companyURL').value.trim();
    const description = document.getElementById('#description').value.trim();
    const salary = document.getElementById('#salary').value.trim();


    if (jobTitle && jobCompany && status && location && url && description && salary) {
        const response = await fetch('/api/applications', {
            method: 'POST',
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


document.addEventListener('submit', newApplicationFormHandler());
