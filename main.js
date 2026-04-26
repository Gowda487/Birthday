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
                    <img src="img1.jpg">
                    <img src="img2.jpg">
                    <img src="img3.jpg">
                </div>
                <p>Every moment with you is special 💖✨</p>
            </div>
        `;
    }

    else if (num === 2) {
        content.innerHTML = `
            <div class="lux-card">
                <h2>💌 Birthday Wishes</h2>
                <p>
                Happy Birthday 🎉💖<br><br>
                You are my happiness ✨<br>
                Stay amazing always 💫
                </p>
            </div>
        `;
    }

    else if (num === 3) {
        content.innerHTML = `
            <div class="lux-card glow-card">
                <h2>🙏 A Prayer for You</h2>
                <p>
                May God bless you with happiness,<br>
                success and love 💖✨
                </p>
            </div>
        `;
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