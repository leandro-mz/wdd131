const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById('lastModified');
modifiedSpan.textContent = document.lastModified;
