async function newApplicationFormHandler(event) {
    event.preventDefault();

    let title = document.getElementById('jobTitle').value.trim();
    let company = document.getElementById('company').value.trim();
    let status = document.getElementById('status').value.trim();
    const location = document.getElementById('location').value.trim();
    const url = document.getElementById('companyURL').value.trim();
    const description = document.getElementById('description').value.trim();
    const salary = document.getElementById('salary').value.trim();

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

document.querySelector('.new-application-form').addEventListener('submit', newApplicationFormHandler);
