function loadNavbar() {
    const isMobile = window.matchMedia("(max-width: 1000px)").matches;
    const navbarFile = isMobile ? "includes/navbarResponsive.php" : "includes/navbar.php";
    
    fetch(navbarFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Réattacher les événements après le chargement
            attachMenuToggle();
        })
        .catch(error => console.error("Erreur de chargement de la navigation :", error));
}

function attachMenuToggle() {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const menu = document.getElementById("menu");

    if (menuIcon && closeIcon && menu) {
        menuIcon.addEventListener("click", () => menu.classList.toggle("hidden"));
        closeIcon.addEventListener("click", () => menu.classList.toggle("hidden"));
    }
}
