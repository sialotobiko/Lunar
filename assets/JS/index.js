

// document.addEventListener("DOMContentLoaded", () => {
//   fetch(hairstylesApi)
//     .then((res) => res.json())
//     .then((hairstyles) => {
//       console.log(hairstyles);
//       document.getElementById("hairstyles").innerHTML = hairstyles
//         .map(
//           (hairstyle) => `
//           <div class="hairstyle" id="hairstyle1">
//           <h2>${hairstyle.name}</h2>
//           <img src="${hairstyle.image}">
//           <h2>${hairstyle.price}</h2>
//           <button  onclick="toggleTimeSlotsDiv()" >Book Appointment</button>
//           <br>
//           <div id="timeslots">
//             ${hairstyle.timeSlot
//               .map((timeSlot) => `<div>${timeSlot}</div>`)
//               .join("")}
//             <br>
//             <button id="bookslotbtn">Book this slot</button>
//           </div>

//           <p>Like!    <span class="like-glyph">&#x2661;</span></p>
//       </div>

// `
//         )
//         .join("");
//     });
// });

// function toggleTimeSlotsDiv() {
//   let time = document.getElementById("timeslots");
//   let hairdo = document.getElementById("hairstyles");
//   for (let item of hairdo) {
//     item.addEventListener("click", () => {
//       if (time.style.display === "none") {
//         time.style.display = "block";
//       } else {
//         time.style.display = "none";
//       }
//     });
//   }
// }

//   document.querySelector("#bookbtn").addEventListener("click", toggleTimeSlotsDiv);
//    () =>
//    {
//     // fetch (hairstylesApi)
//     // .then((res) => res.json())
//     // .then((timeSlots) => {
//     //     document.querySelector(".timeslots").toggleTimeSlotsDiv()
//     // })
// })

function renderOneHairstyle(hairstyle) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div class="hairstyles id="hairstyles">
          <h2>${hairstyle.name}</h2>
          <img src="${hairstyle.image}">
          <h2>${hairstyle.price}</h2>
          <button id="bookbtn" onclick="toggleTimeSlotsDiv(); showBookedAppointmentAlert();" >Book Appointment</button>
          <br>
          <br>
          <div id="timeslots">${hairstyle.timeSlot}</div>
          <br>
          <br>
          <button id="likebtn" onclick="like()"> Like!</button>
          
      </div>
    `
  document.querySelector("#hairstyles").appendChild(card);
}

function toggleTimeSlotsDiv() {
//   let time = document.getElementById("timeslots");
//   let hairdo = document.getElementById("hairstyles");
//   for (let item of hairstylesData) {
//     item.addEventListener("click", () => {
//       if (time.style.display === "none") {
//         time.style.display = "block";
//       } else {
//         time.style.display = "none";
//       }
//     })
// }

let time = document.getElementById("timeslots");
if (time.style.display === "none"){
    time.style.display = "block";
}else{
    time.style.display = "none";
}
}


function getAllHairstyles(){
    fetch("http://localhost:3000/hairstylesData")
    .then(res => res.json())
    .then(hairstylesData => hairstylesData.forEach (hairstyle => renderOneHairstyle(hairstyle)))
}

function initialize() {
    getAllHairstyles();
    //hairstylesData.forEach (hairstyle => renderOneHairstyle(hairstyle))
}
initialize();

//let bookButton = getElementById("bookbtn");
function showBookedAppointmentAlert(timeSlot){
    alert(`Successful!You booked an appointment for ${timeSlot}`);
}
//bookButton.addEventListener('click', showBookedAppointmentAlert);

//The Like Function

function like(){
    let likebutton = document.querySelector("#likebtn")
    likebutton.innerHTML = "Liked!"
}
