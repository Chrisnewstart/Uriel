// =============== Carousel photo + galerie photo ===============
// Ce code récupère dans des variables, le nom (instancier sur chaque page recevant le carrousel) et 2 ID (gallery1, gallery2).
// Passe dans 2 boucles afin de récuprer les images des dossier (imageFolder) avec leurs chiffres ${i} pour les afficher dans le HTML.

const imageFolder = `img/${nameGalerie}/`; // Insère nameGalerie dans le chemin
const imageCount = 7; // Nombre d'images à afficher

// Récupération des ID
const gallery1 = document.getElementById("gallery1");
const gallery2 = document.getElementById("gallery2");
 
// Boucle pour gallery1
for (let i = 1; i <= imageCount; i++) {
  let img = document.createElement("img");
  img.src = `${imageFolder}image${i}.jpg`; // Adapate format selon images
  img.alt = `Image ${i}`;
  img.classList.add("img-galery1"); // Ajoute une classe à l'image
  gallery1.appendChild(img);
}

// Boucle pour gallery2
for (let i = 1; i <= imageCount; i++) {
  let img = document.createElement("img");
  img.src = `${imageFolder}image${i}.jpg`; // Adapate format selon images
  img.alt = `Image ${i}`;
  img.classList.add("img-galerie"); // Ajoute une classe à l'image
  gallery2.appendChild(img);
}

// Fonction d'ouverture de la galerie photo
function openModal() {
document.getElementById("modal").style.display = "flex";
}

// Fonction fermeture de la galerie photo
function closeModal() {
document.getElementById("modal").style.display = "none";
}
