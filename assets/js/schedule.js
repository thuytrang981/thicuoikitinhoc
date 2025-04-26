document.addEventListener("DOMContentLoaded", function() {

    const scheduleTabs = document.querySelectorAll(".schedule-tab");
    const scheduleDays = document.querySelectorAll(".schedule-day");
    scheduleTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            scheduleTabs.forEach(t => t.classList.remove("active"));
            scheduleDays.forEach(d => d.classList.remove("active"));
            

            this.classList.add("active");
  
            const day = this.getAttribute("data-day");
            
            document.getElementById(`schedule-day-${day}`).classList.add("active");
        });
    });
    
    function setCurrentDay() {
        const today = new Date().getDay(); 
        const dayMapping = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 }; 
        

        const currentDay = dayMapping[today] || 2;
        

        scheduleTabs.forEach(t => t.classList.remove("active"));
        scheduleDays.forEach(d => d.classList.remove("active"));
        

        document.querySelector(`.schedule-tab[data-day="${currentDay}"]`).classList.add("active");
        document.getElementById(`schedule-day-${currentDay}`).classList.add("active");
    }
    

    setCurrentDay();
    

    const currentDateElement = document.getElementById("current-date");
    const lastUpdateElement = document.getElementById("last-update");
    
    if (currentDateElement && lastUpdateElement) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = now.getFullYear();
        
        const formattedDate = `${day}/${month}/${year}`;
        
        currentDateElement.textContent = formattedDate;
        lastUpdateElement.textContent = formattedDate;
    }
});
