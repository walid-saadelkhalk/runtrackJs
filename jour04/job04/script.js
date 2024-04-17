document.addEventListener("DOMContentLoaded", function() {
    const userTable = document.getElementById("userTable");
    const updateButton = document.getElementById("updateButton");

    function updateUserTable() {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(data => {
                userTable.getElementsByTagName("tbody")[0].innerHTML = "";

                data.forEach(user => {
                    const row = userTable.insertRow();
                    row.innerHTML = `<td>${user.id}</td>
                                    <td>${user.name}</td>
                                    <td>${user.first_name}</td>
                                    <td>${user.email}</td>`;
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    }
    updateUserTable();
    updateButton.addEventListener("click", updateUserTable);
});
