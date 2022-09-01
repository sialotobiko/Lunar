const hairstylesApi ="http://localhost:3000/hairstyles"

document.addEventListener("DOMContentLoaded", () => {
  fetch (hairstylesApi)
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
            
          </div>
          
          <p>Like!    <span class="like-glyph">&#x2661;</span></p>
      </div>

`
        )
        .join("");
    });
});

document.querySelector("#bookbtn").addEventListener("click", () => {
    fetch (hairstylesApi)
    .then((res) => res.json())
    .then((timeSlots) => {
        document.querySelector(".timeslots").innerHTML = timeSlots
        .map(
            (timeslot) => `
            <div class="timeslots">
            ${hairstyle.timeSlot.map(timeSlot=>`<div>${timeSlot}</div>`).join('')}
            <button id="bookslotbtn">Book this slot</button>
          </div>
            `
        )
    })
})
