document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splashScreen");
    const enterBtn = document.getElementById("enterBtn");
    const mainContent = document.getElementById("mainContent");

   
    setTimeout(() => {
        enterBtn.classList.add("visible");
    }, 2000); 

   
    enterBtn.addEventListener("click", function() {
        splashScreen.style.opacity = 0; 
        setTimeout(() => {
            splashScreen.classList.add("hidden"); 
            mainContent.style.display = "block";  d
        }, 1000);
    });
});
