

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


//popup function>>>
//when cookie clicker btn is clicked, activate func:
document.getElementById("cookieClicker").addEventListener("click", function () {
  //convert cookie count string to int (change data type)
  
  //if next cookie count will be 100, show the popup
  if (currentNum + 1 === 100) {
    document.getElementById("achievementPopup").classList.remove("hidden");
  }
  //update cookie count on screen/UI to 100
  /*document.getElementById("currentNum").textContent = currentNum + 1;*/
  if (currentNum === 99) {
    currentNum++;
    document.getElementById("currentNum").textContent = currentNum; // Update display
  }

});
//when "close" btn is clicked, activate func: hide the popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("achievementPopup").classList.add("hidden");
});
