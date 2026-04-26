// SCREEN SWITCH
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// 🎂 BLOW CANDLE
function blowCandle() {
    const flame = document.getElementById("flame");
    flame.classList.add("blow");

    setTimeout(() => {
        showScreen("question-screen");
    }, 700);
}

// ❓ QUESTION
function answerYes() {
    showScreen("boxes-screen");
}
function answerNo() {
    document.getElementById("noMsg").innerText = "😒 Not allowed! Try again 😂";
}

// 🎁 BOX OPEN
function openBox(el, num) {
    el.classList.add("open");

    setTimeout(() => {
        openPage(num);
    }, 600);
}

// 📄 PAGE CONTENT
function openPage(num) {
    showScreen("view-screen");
    let content = document.getElementById("view-content");

    if (num === 1) {
        content.innerHTML = "<h2>Memories 💖</h2><p>Add your images here</p>";
    }
    if (num === 2) {
        content.innerHTML = "<h2>Wishes 💌</h2><p>Happy Birthday! 💖</p>";
    }
    if (num === 3) {
        content.innerHTML = "<h2>Prayer 🙏</h2><p>God bless you always ✨</p>";
    }
}

// BACK
function goBack() {
    showScreen("boxes-screen");
}

// 💖 FLOATING HEARTS
for (let i = 0; i < 20; i++) {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random()*4) + "s";
    document.body.appendChild(h);
}