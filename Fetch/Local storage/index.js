const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const userDataTable = document.getElementById('userData');
const retrieveDataButton = document.getElementById('retrieveData');

function storeUserData() {
    const name = nameInput.value;
    const age = ageInput.value;

    if (name && age) {
        const userData = {
            name: name,
            age: age
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        nameInput.value = '';
        ageInput.value = '';

        alert('Data stored in Local Storage successfully!');
    } else {
        alert('Please fill in both name and age fields.');
    }
}

function retrieveUserData() {
    const userDataJSON = localStorage.getItem('userData');

    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const newRow = userDataTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);

        nameCell.textContent = userData.name;
        ageCell.textContent = userData.age;
    } else {
        alert('No data found in Local Storage.');
    }
}

userForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    storeUserData();
});

retrieveDataButton.addEventListener('click', retrieveUserData);
