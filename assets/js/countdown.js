
document.addEventListener("DOMContentLoaded", () => {

    const examDate = new Date("June 26, 2025 07:00:00").getTime()
  

    const countdownTimer = setInterval(() => {

      const now = new Date().getTime()
  

      const timeRemaining = examDate - now

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
  

      document.getElementById("countdown-days").textContent = days.toString().padStart(2, "0")
      document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("countdown-minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("countdown-seconds").textContent = seconds.toString().padStart(2, "0")

      if (timeRemaining < 0) {
        clearInterval(countdownTimer)
        document.getElementById("countdown-days").textContent = "00"
        document.getElementById("countdown-hours").textContent = "00"
        document.getElementById("countdown-minutes").textContent = "00"
        document.getElementById("countdown-seconds").textContent = "00"
  
        const examInfo = document.querySelector(".exam-info")
        if (examInfo) {
          examInfo.innerHTML =
            "<p><i class='fas fa-exclamation-circle'></i> <strong>Kỳ thi đã bắt đầu!</strong> Chúc các em thi tốt!</p>"
        }
      }
    }, 1000)
  })
  