let distance = 120;

setInterval(function () {

    distance = Math.floor(Math.random() * 100) + 20;

    document.getElementById("distance").textContent =
        distance + " cm";

    if (distance < 30) {

        document.getElementById("obstacle").textContent =
            "⚠️ OBSTACLE DETECTED";

    } else {

        document.getElementById("obstacle").textContent =
            "CLEAR";
    }

}, 2000);