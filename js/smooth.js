// =============== Effet smooth item page ===============
// Crée a la vite avec chat GPT

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Pour éviter de réanimer plusieurs fois
            }
        });
    }, { threshold: 0.2 }); // Déclenche quand 20% de la section est visible

    sections.forEach(section => observer.observe(section));
});


