const stops = [
  { pos: 5, name: "Mission Chowk", time: "8:00 AM" },
  { pos: 20, name: "VijayNagar", time: "8:15 AM" },
  { pos: 35, name: "Vishrambaag", time: "8:30 AM" },
  { pos: 50, name: "Inam Dhamni", time: "8:45 AM" },
  { pos: 65, name: "Ankali", time: "9:00 AM" },
  { pos: 80, name: "Jaysingpur", time: "9:10 AM" },
  { pos: 95, name: "DKTE College", time: "9:30 AM" }
];

let index = 0;

function startTracking() {
  const bus = document.getElementById("bus");
  const status = document.getElementById("status");

  index = 0;

  moveBus();

  function moveBus() {
    if (index >= stops.length) {
      status.innerText = "Bus reached DKTE College";
      return;
    }

    let stop = stops[index];

    // Move bus
    bus.style.left = stop.pos + "%";

    // Update status
    status.innerText = `Bus at ${stop.name} (${stop.time})`;

    // Wait 10 seconds at stop, then move
    setTimeout(() => {
      index++;
      moveBus();
    }, 10000); // 10 sec stop
  }
}