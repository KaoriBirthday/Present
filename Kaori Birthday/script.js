document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2023-11-17T00:00:00+07:00"); // Indonesia WIB time
    const surprise = document.getElementById("surprise");
    const countdown = document.querySelector(".countdown");
    
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate.getTime() - now;
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        surprise.style.display = "block";
        countdown.style.display = "none";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }
  
    const interval = setInterval(updateCountdown, 1000);
  });
  