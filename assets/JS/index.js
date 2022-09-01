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
          <div class="timeslots">
            ${hairstyle.timeslot.map(timeslot) }
          </div>
          <p>Like!    <span class="like-glyph">&#x2661;</span></p>
      </div>

`
        )
        .join("");
    });
});
