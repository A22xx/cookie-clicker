

let currentNum = 0;

document.getElementById("cookieClicker").addEventListener("click", function() {
    currentNum++;
    document.getElementById("currentNum").textContent = currentNum;
});

document.getElementById("cookieRestart").addEventListener("click", function() {
    currentNum = 0;
    document.getElementById("currentNum").textContent = currentNum;
});