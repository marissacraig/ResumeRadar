function otherJobTitle(event) {
  var otherEl = document.getElementById('otherJobTitle');

  if (event.target.value=='Other') {
    otherEl.style.display = 'block';
  } else {
    otherEl.style.display = 'none';
  }
}

function otherCompany(event) {
  var otherEl = document.getElementById('otherCompany');

  if (event.target.value=='Other') {
    otherEl.style.display = 'block';
  } else {
    otherEl.style.display = 'none';
  }
}

function otherStatus(event) {
  var otherEl = document.getElementById('otherStatus');

  if (event.target.value=='Other') {
    otherEl.style.display = 'block';
  } else {
    otherEl.style.display = 'none';
  }
}

document.getElementById("jobTitle").addEventListener("change", otherJobTitle);
document.getElementById("company").addEventListener("change", otherCompany);
document.getElementById("status").addEventListener("change", otherStatus);