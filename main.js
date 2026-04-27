// ================= SCREEN SWITCH =================
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
        s.classList.remove("no-screen-active");
    });

    const target = document.getElementById(id);

    if (!target) return;

    target.classList.add("active");

    // special animation trigger for NO screen
    if (id === "no-screen") {
        setTimeout(() => {
            target.classList.add("no-screen-active");
        }, 50);
    }
}

// ================= 🎂 BLOW CANDLES =================
function blowCandles() {
    console.log("🔥 Blow clicked");

    const flames = document.querySelectorAll(".flame");

    // fade flames
    flames.forEach(flame => {
        flame.style.transition = "0.4s ease";
        flame.style.opacity = "0";
        flame.style.transform = "scale(0)";
    });

    // safe blast (won’t break flow even if error)
    try {
        startBlast();
    } catch (e) {
        console.error("Blast error:", e);
    }

    // switch screen after animation
    setTimeout(() => {
        showScreen("question-screen");
    }, 900);
}


// ================= 💥 BLAST EFFECT =================
function startBlast() {
    console.log("💥 Blast started");

    for (let i = 0; i < 35; i++) {
        const pop = document.createElement("div");
        pop.classList.add("pop");

        pop.style.position = "fixed";
        pop.style.left = (window.innerWidth / 2) + "px";
        pop.style.top = (window.innerHeight / 2) + "px";

        pop.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
        pop.style.setProperty("--y", (Math.random() * 400 - 200) + "px");

        document.body.appendChild(pop);

        setTimeout(() => pop.remove(), 700);
    }
}


// ================= ❓ QUESTION =================
function answerYes() {
    showScreen("boxes-screen");

    setTimeout(() => {
        const text = document.getElementById("surpriseText");
        if (text) text.classList.add("show");
    }, 200);
}

function answerNo() {
    const msg = document.getElementById("noMsg");

    if (msg) msg.innerText = "😏 Thinking again...?";

    setTimeout(() => {
        showScreen("no-screen");
    }, 800);
}


// ================= 🎁 BOX OPEN =================
function openBox(el, num) {
    el.classList.add("open");

    setTimeout(() => {
        openPage(num);
    }, 500);
}


// ================= 📄 PAGE CONTENT =================
function openPage(num) {
    showScreen("view-screen");

    const content = document.getElementById("view-content");
    num = parseInt(num);

    console.log("Opening:", num);

    if (num === 1) {
        content.innerHTML = `
            <div class="lux-card">
                <h2>📸 Our Memories</h2>
                <div class="gallery">
                    <img src="img1.jpg"
                    <img src="img2.jpg">
                    <img src="img3.jpg">
                    <img src="img4.jpg">
                    <img src="img5.jpg">
                    <img src="img6.jpg">
                    <img src="img7.jpg">
                    <img src="img8.jpg">
                    <img src="img9.jpg" class="top-focus">
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
Happy Birthday to the girl who became my family without even trying 🎂💖 You’re my best friend, my constant, my safe place in this chaotic world. From random midnight talks to sitting in silence when words weren’t enough, you’ve been with me through every version of myself. I don’t know what I did to deserve a friend like you, but I thank God every single day for sending you into my life. People say friends are the family we choose, and if that’s true, then I chose the absolute best. Today on your birthday, I don’t just wish for cake and gifts for you — I wish for peace in your heart, fire in your dreams, and people who love you the way you love everyone else. My only wish is that this bond we have, this weird, unbreakable, beautiful friendship, stays the same forever. No matter where life takes us, no matter how busy we get or how far we go, I hope we always find our way back to each other. You deserve the world, and I hope this year gives you a little piece of it every single day. So go make memories, eat too much cake, and remember that you’ll always have me in your corner. Happy Birthday, bestie. I’m so damn lucky to have you, and I’m never letting you go. Party pending on you though 😉✨                </p>
            </div>
        `;
    }

    else if (num === 3) {
    content.innerHTML = `
        <div class="glass-card prayer-glow">
            <h2 class="fade-text">Prayer 🙏</h2>

            <input type="text" id="p1" placeholder="Your wish 1">
            <input type="text" id="p2" placeholder="Your wish 2">
            <input type="text" id="p3" placeholder="Your wish 3">

            <button onclick="submitPrayer()">Submit 💖</button>

            <p id="prayerMsg"></p>
        </div>
    `;
}

    else {
        content.innerHTML = "<h2>Error loading content 😅</h2>";
    }
}


// ================= 🔙 BACK =================
function goBack() {
    showScreen("boxes-screen");
}


// ================= 🎉 SPRINKLES (SAFE INIT) =================
window.addEventListener("DOMContentLoaded", () => {
    const cake = document.querySelector(".cake");

    if (!cake) return;

    for (let i = 0; i < 25; i++) {
        let s = document.createElement("div");
        s.className = "sprinkle";

        s.style.position = "absolute";
        s.style.left = Math.random() * 100 + "%";
        s.style.top = (170 + Math.random() * 80) + "px";
        s.style.background = `hsl(${Math.random() * 360},100%,60%)`;

        cake.appendChild(s);
    }
});

function submitPrayer() {
    const v1 = document.getElementById("p1").value;
    const v2 = document.getElementById("p2").value;
    const v3 = document.getElementById("p3").value;

    const msg = document.getElementById("prayerMsg");

    if (!v1 || !v2 || !v3) {
        msg.innerText = "Please fill all wishes 🙏";
        return;
    }

    msg.innerText = "RADHE  RADHE ";
}