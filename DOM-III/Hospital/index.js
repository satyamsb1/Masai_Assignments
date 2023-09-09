// fill in javascript code here


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.querySelector("#name").value;
      const docID = document.querySelector("#docID").value;
      const specialization = document.querySelector("#dept").value;
      const experience = parseFloat(document.querySelector("#exp").value);
      const email = document.querySelector("#email").value;
      const mobile = document.querySelector("#mbl").value;
  
      let role = "";
      if (experience > 5) {
        role = "Senior";
      } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
      } else {
        role = "Trainee";
      }
  
      const newRow = tableBody.insertRow(-1);
  
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
      const cell7 = newRow.insertCell(6);
      const cell8 = newRow.insertCell(7);
  
      cell1.innerHTML = name;
      cell2.innerHTML = docID;
      cell3.innerHTML = specialization;
      cell4.innerHTML = experience;
      cell5.innerHTML = email;
      cell6.innerHTML = mobile;
      cell7.innerHTML = role;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", function () {
        tableBody.deleteRow(newRow.rowIndex);
      });
  
      cell8.appendChild(deleteButton);
  
      form.reset();
    });
  });
  