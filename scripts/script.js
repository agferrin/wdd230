const year = new Date();
document.querySelector('#year').textContent = year.getFullYear();
const updated = document.lastModified;
document.querySelector('#updated').textContent = updated;