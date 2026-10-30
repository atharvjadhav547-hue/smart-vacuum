function saveName() {

    const name = document.getElementById("robotName").value;

    document.getElementById("message").textContent =
        "✅ Robot name saved as: " + name;
}// Load saved robot name when the Settings page opens
window.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("robotName");

    if (savedName) {
        document.getElementById("robotName").value = savedName;
    }
});


// Save robot name
function saveName() {

    const name = document.getElementById("robotName").value.trim();

    if (name === "") {
        document.getElementById("message").textContent =
            "⚠️ Please enter a robot name.";
        return;
    }

    // Save the name permanently in browser storage
    localStorage.setItem("robotName", name);

    document.getElementById("message").textContent =
        "✅ Robot name saved as: " + name;
}