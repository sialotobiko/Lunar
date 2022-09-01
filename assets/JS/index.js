document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/hairstyles")
    .then((res) => res.json())
    .then((hairstyles) => {
      document.getElementById("hairstyles").innerHTML = hairstyles
        .map(
          (hairstyle) => `
          <div class="hairstyle" id="hairstyle1">
          <h2>${hairstyle.name}</h2>
          <img src="${hairstyle.image}">
          <h2>${hairstyle.price}</h2>
          <button id="bookbtn">Book Appointment</button>
          <br>
          <div class="timeslots">
            ${hairstyle.timeSlot.map(timeSlot=>`<div>${timeSlot}</div>`).join('')}
            <button id="bookslotbtn">Book this slot</button>
          </div>
          <p>Like!    <span class="like-glyph">&#x2661;</span></p>
      </div>

`
        )
        .join("");
    });
});

