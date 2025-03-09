// =============== Galerie photo ===============
// Ce code récupère dans des variables, le nom (instancier sur chaque page recevant le carrousel) avec un ID (gallery).

const imageFolder = `img/${nameGalerie}/`; // Insère nameGalerie dans le chemin
const imageCount = 9; // Nombre d'images à afficher

// Récupération des ID
const gallery = document.getElementById("gallery");
 
// Boucle pour gallery
for (let i = 1; i <= imageCount; i++) {
  let img = document.createElement("img");
  img.src = `${imageFolder}image${i}.jpg`; // Adapate format selon images
  img.alt = `Image ${i}`;
  img.classList.add("img-galery"); // Ajoute une classe à l'image
  gallery.appendChild(img);
}

// Fonction d'ouverture de la galerie photo
function openModal() {
document.getElementById("modal").style.display = "flex";
}

// Fonction fermeture de la galerie photo
function closeModal() {
document.getElementById("modal").style.display = "none";
}

// =============== Carousel photo ===============
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
    setTimeout(showSlides, 3000);
}

showSlides();
