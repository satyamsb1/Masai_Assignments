document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const taskName = document.querySelector("#task").value;
      const priority = document.querySelector("#priority").value;
  
      if (!taskName || !priority) {
        alert("Please fill in both Task Name and Priority fields.");
        return;
      }
  
      const newRow = tableBody.insertRow(-1);
  
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
  
      cell1.innerHTML = taskName;
      cell2.innerHTML = priority;
      cell3.innerHTML = "<button class='favorite-button'>Favourite</button>";
  
      if (priority === "High") {
        newRow.style.backgroundColor = "red";
      } else {
        newRow.style.backgroundColor = "green";
      }
  
      // Clear the form
      form.reset();
  
      // Add a click event listener to the favorite button (do nothing for now)
      const favoriteButton = newRow.querySelector(".favorite-button");
      favoriteButton.addEventListener("click", function (e) {
        e.preventDefault();
        // You can add your favorite functionality here in the future
      });
    });
  });
  