

let currentNum = 0;

document.getElementById("cookieClicker").addEventListener("click", function() {
    currentNum++;
    document.getElementById("currentNum").textContent = currentNum;
});

document.getElementById("cookieRestart").addEventListener("click", function() {
    currentNum = 0;
    document.getElementById("currentNum").textContent = currentNum;
});

let lastTap = 0;
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("touchend", function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
        }
        lastTap = currentime;
    });
});


document.getElementById("cookieClicker").addEventListener("click", function () {
  const currentNum = parseInt(document.getElementById("currentNum").textContent);

  if (currentNum + 1 === 100) {
    document.getElementById("achievementPopup").classList.remove("hidden");
  }

  document.getElementById("currentNum").textContent = currentNum + 1;
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("achievementPopup").classList.add("hidden");
});
