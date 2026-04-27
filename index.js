
// After animation ends → switch to login
setTimeout(() => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
}, 4000); // total animation time

// Password check
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === "SHANTHABHAI") {
        window.location.href = "main.html";
    } else {
        document.getElementById("error").innerText = "❌ Wrong Password!";
    }
}

// Card tilt effect
const card = document.querySelector(".login-container");

document.addEventListener("mousemove", (e) => {
    if (!card) return;

    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Floating hearts
function createHearts() {
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random()*4) + "s";

        document.getElementById("main-content").appendChild(heart);
    }
}

// Run after intro
setTimeout(createHearts, 4000);

Main
