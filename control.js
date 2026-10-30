function moveRobot(direction) {

    const display = document.getElementById("direction");

    if (direction === "FORWARD") {
        display.textContent = "⬆️ Robot moving forward";
    }

    else if (direction === "BACKWARD") {
        display.textContent = "⬇️ Robot moving backward";
    }

    else if (direction === "LEFT") {
        display.textContent = "⬅️ Robot turning left";
    }

    else if (direction === "RIGHT") {
        display.textContent = "➡️ Robot turning right";
    }

    else if (direction === "STOP") {
        display.textContent = "🛑 Robot stopped";
    }

    console.log("Robot command:", direction);
}