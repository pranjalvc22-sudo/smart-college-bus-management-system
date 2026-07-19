// =======================
// LOAD SAVED BUS ON START
// =======================

let selectedBus = localStorage.getItem("adminBus");

window.onload = function () {
    document.getElementById("selectedBus").innerText =
        "Selected Bus: " + (selectedBus ? selectedBus : "--");
};

// =======================
// SELECT BUS FUNCTION (FIX)
// =======================

function selectBus() {
    let bus = document.getElementById("adminBusSelect").value;

    if (bus === "") {
        alert("Please select a bus!");
        return;
    }

    // SAVE CORRECTLY
    localStorage.setItem("adminBus", bus);
    selectedBus = bus;

    // UPDATE UI IMMEDIATELY
    document.getElementById("selectedBus").innerText =
        "Selected Bus: " + bus;

    alert("Bus " + bus + " selected successfully!");
}

// =======================
// OPEN GPS
// =======================

function openGPS() {
    let bus = localStorage.getItem("adminBus");

    if (!bus) {
        alert("Select a bus first!");
        return;
    }

    localStorage.setItem("adminViewBus", bus);
    window.location.href = "gps (1).html";
}

// =======================
// YOUR EXISTING BUS CARDS LOGIC
// =======================

let statuses = ["On Route", "Arriving", "Reached"];
let etas = ["10 min", "5 min", "0 min"];

function updateBus(index) {
    let cards = document.getElementsByClassName("bus-card");

    let statusEl = cards[index].querySelector(".status");
    let etaEl = cards[index].querySelector(".eta");

    let currentIndex = statuses.indexOf(statusEl.innerText);
    let nextIndex = (currentIndex + 1) % statuses.length;

    statusEl.innerText = statuses[nextIndex];
    etaEl.innerText = etas[nextIndex];
}