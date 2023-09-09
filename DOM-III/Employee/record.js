// Select the form and table elements
const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');

// Add a submit event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get values from the form inputs
  const name = document.querySelector('#name').value;
  const employeeID = document.querySelector('#employeeID').value;
  const department = document.querySelector('#department').value;
  const experience = parseFloat(document.querySelector('#exp').value);
  const email = document.querySelector('#email').value;
  const mobile = document.querySelector('#mbl').value;

  // Determine the role based on experience
  let role = '';
  if (experience > 5) {
    role = 'Senior';
  } else if (experience >= 2 && experience <= 5) {
    role = 'Junior';
  } else {
    role = 'Fresher';
  }

  // Create a new table row and populate it with data
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${employeeID}</td>
    <td>${department}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button class="delete-button">Delete</button></td>
  `;

  const deleteButton = newRow.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    tableBody.removeChild(newRow);
  });

  tableBody.appendChild(newRow);

  form.reset();
  
});
