// SCREEN SWITCH
function showScreen(id) {
    console.log("Switching to:", id);

    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (!target) {
        console.error("Screen not found:", id);
        return;
    }

    target.classList.add("active");
}

// 🎂 BLOW CANDLE
function blowCandles() {
    console.log("Blow clicked");

    const flames = document.querySelectorAll(".flame");

    flames.forEach(flame => {
        flame.style.transition = "all 0.4s ease";
        flame.style.opacity = "0";
        flame.style.transform = "scale(0)";
    });

    // blast
    startBlast();

    // switch screen AFTER everything
    setTimeout(() => {
        showScreen("question-screen");
    }, 800);
}

// ❓ QUESTION
function answerYes() {
    showScreen("boxes-screen");

    const text = document.getElementById("surpriseText");

    // delay ensures DOM renders first
    setTimeout(() => {
        text.classList.add("show");
    }, 100);
}
function answerNo() {
    document.getElementById("noMsg").innerText = "😒 Not allowed! Try again 😂";
}

function openBox(el, num) {
    el.classList.add("open");

    setTimeout(() => {
        openPage(num); // pass correctly
    }, 600);
}

function openPage(num) {
    showScreen("view-screen");

    const content = document.getElementById("view-content");

    // force number (critical)
    num = parseInt(num);

    console.log("Opening:", num); // 🔥 debug

    if (num === 1) {
        content.innerHTML = `
            <div class="lux-card">
                <h2>📸 Our Memories</h2>
                <div class="gallery">
                    <img src="1a.jpeg">
                    <img src="img2.jpg">
                    <img src="img3.jpg">
                </div>
                <p>Every moment with you is special 💖✨</p>
            </div>
        `;
    }

    else if (num === 2) {
        content.innerHTML = `
<div class="glass-card">
    <h2 class="fade-text">Happy Birthday 💖</h2>
    <p class="fade-text delay-1">
        You deserve all the happiness in the world ✨
    </p>
</div>`;
    }

    else if (num === 3) {
       content.innerHTML = `
<div class="glass-card prayer-glow">
    <h2 class="fade-text">Prayer 🙏</h2>
    <p class="fade-text delay-1">
        May all your dreams come true and your life be filled with love 💫
    </p>
</div>`;
    }

    else {
        content.innerHTML = "<h2>Error loading content 😅</h2>";
    }
}


function goBack() {
    // remove active from all
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    // show boxes screen again
    document.getElementById("boxes-screen").classList.add("active");
}

const cake = document.querySelector(".cake");

for (let i = 0; i < 25; i++) {
    let s = document.createElement("div");
    s.className = "sprinkle";

    s.style.left = Math.random()*100 + "%";
    s.style.top = (170 + Math.random()*80) + "px";
    s.style.background = `hsl(${Math.random()*360},100%,60%)`;

    cake.appendChild(s);
}
