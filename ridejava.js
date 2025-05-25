var tbody = document.getElementById("tbody");

fetch('ride.json')
  .then(response => response.json())
  .then(data => {
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");

      var td1 = document.createElement("td");
      td1.innerText = data[i].rideId;

      var td2 = document.createElement("td");
      td2.innerText = data[i].source;

      var td3 = document.createElement("td");
      td3.innerText = data[i].destination;

      var td4 = document.createElement("td");
      td4.innerText = data[i].date;

      var td5 = document.createElement("td");
      td5.innerText = data[i].time;

      var td6 = document.createElement("td");
      td6.innerText = data[i].driverName;

      var td7 = document.createElement("td");
      td7.innerText = data[i].driverContact;

      var td8 = document.createElement("td");
      td8.innerText = data[i].vehicleType;

      var td9 = document.createElement("td");
      td9.innerText = data[i].vehicleNumber;

      var td10 = document.createElement("td");
      td10.innerText = data[i].availableSeats;

      var td11 = document.createElement("td");
      td11.innerText = data[i].fare;

      var td12 = document.createElement("td");
      td12.innerText = data[i].estimatedDuration;

      var td13 = document.createElement("td");
      var button = document.createElement("button");
      button.innerText = "Book Ride";
      button.setAttribute("id", "bookbutton");
      button.style.backgroundColor = "#343a40";
      button.style.color = "white";
      button.style.padding = "6px 12px";
      button.style.border = "none";
      button.style.borderRadius = "4px";
      button.addEventListener("click", function () {
        document.getElementById("rideModal").style.display = "block";
      });
      // console.log("hello");
      // })
      // console.log(button)
      td13.appendChild(button);
      document.body.appendChild(td13);

      document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("rideModal").style.display = "none";
      });


      document.getElementById("rideform").addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("rideModal").style.display = "none";
        setTimeout(() => {
          document.getElementById("successModal").style.display = "block";
        }, 5000);

        this.reset();

      });


      document.getElementById("okButton").addEventListener("click", function () {
        document.getElementById("successModal").style.display = "none";
      });

      tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, td12, td13);


      tbody.appendChild(tr);
    }
  });

