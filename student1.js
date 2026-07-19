let busDistance = 10;
let studentDistance = 2;

let isWaiting = false;
let messageSent = false;

let interval = setInterval(updateSystem, 2000);

function updateSystem() {

  const distanceEl = document.getElementById("distance");
  const timeEl = document.getElementById("time");
  const etaEl = document.getElementById("eta");
  const statusEl = document.getElementById("status");

  const attendanceBtn = document.getElementById("attendanceBtn");
  const notifyBtn = document.getElementById("notifyBtn");

  // 🕒 Time update
  let now = new Date();
  timeEl.innerText = "Local Time: " + now.toLocaleTimeString();

  // 🚌 BUS MOVING
  if (busDistance > 0) {

    busDistance--;

    distanceEl.innerText = "Distance: " + busDistance + " km";
    etaEl.innerText = "ETA: " + (busDistance * 2) + " mins";
    statusEl.innerText = "Bus is on the way";

  } 
  // 🛑 BUS REACHED STOP
  else {

    busDistance = 0;
    distanceEl.innerText = "Distance: 0 km";
    etaEl.innerText = "ETA: 0 mins";

    if (!isWaiting) {

      isWaiting = true;

      statusEl.innerText = "Bus arrived. Waiting...";

      // ⏱️ WAIT 10 SECONDS THEN BUS LEAVES
      setTimeout(() => {
        statusEl.innerText = "Bus has left the stop";

        // disable buttons after departure
        notifyBtn.disabled = true;
        attendanceBtn.disabled = true;

      }, 10000);
    }
  }

  // 🎯 Attendance ONLY when bus at stop
  attendanceBtn.disabled = busDistance !== 0;

  // 🎯 Notify only when bus is coming (NOT at stop)
  notifyBtn.disabled = !(busDistance > 0 && busDistance <= 2 && studentDistance <= 2);
}


// ✅ Attendance button
document.getElementById("attendanceBtn").onclick = () => {
  alert("Attendance marked successfully!");
};


// ✅ Notify button
document.getElementById("notifyBtn").onclick = () => {
  messageSent = true;
  alert("Message sent: I am coming, please wait!");
};


// ✅ GPS BUTTON
function openGPS() {
  window.location.href = "gps (1).html";
}