const fetchUsersButton = document.getElementById('fetchUsers');
const userList = document.getElementById('userList');

async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        const users = data.data;

        userList.innerHTML = ''; 

        users.forEach((user) => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const userAvatar = document.createElement('img');
            userAvatar.classList.add('user-avatar');
            userAvatar.src = user.avatar;
            userAvatar.alt = `${user.first_name} ${user.last_name}'s avatar`;

            const userName = document.createElement('div');
            userName.classList.add('user-name');
            userName.textContent = `${user.first_name} ${user.last_name}`;

            const userEmail = document.createElement('div');
            userEmail.classList.add('user-email');
            userEmail.textContent = user.email;

            userCard.appendChild(userAvatar);
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);

            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchUsersButton.addEventListener('click', fetchAndDisplayUsers);
