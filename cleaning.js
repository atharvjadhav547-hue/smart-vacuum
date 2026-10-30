const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const vacuumBtn = document.getElementById("vacuumBtn");

const cleanStatus = document.getElementById("cleanStatus");
const vacuumStatus = document.getElementById("vacuumStatus");


// Get saved vacuum status
let vacuum = localStorage.getItem("vacuumStatus") === "ON";


// Update the vacuum button when page opens
updateVacuumDisplay();


// START AUTOMATIC CLEANING
startBtn.addEventListener("click", function () {

    localStorage.setItem("cleaningStatus", "ON");

    cleanStatus.textContent =
        "🟢 Automatic cleaning is running.";

    startBtn.disabled = true;
});


// STOP CLEANING
stopBtn.addEventListener("click", function () {

    localStorage.setItem("cleaningStatus", "OFF");

    cleanStatus.textContent =
        "🔴 Cleaning stopped.";

    startBtn.disabled = false;
});


// VACUUM ON / OFF
vacuumBtn.addEventListener("click", function () {

    vacuum = !vacuum;

    if (vacuum) {

        localStorage.setItem("vacuumStatus", "ON");

    } else {

        localStorage.setItem("vacuumStatus", "OFF");

    }

    updateVacuumDisplay();
});


// Update vacuum display
function updateVacuumDisplay() {

    if (vacuum) {

        vacuumStatus.textContent = "ON";

        vacuumStatus.style.color = "#16a34a";

        vacuumBtn.textContent =
            "🛑 Turn Vacuum OFF";

    } else {

        vacuumStatus.textContent = "OFF";

        vacuumStatus.style.color = "#dc2626";

        vacuumBtn.textContent =
            "🧹 Turn Vacuum ON";
    }
}