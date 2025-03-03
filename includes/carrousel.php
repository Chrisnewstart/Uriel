
<script>
  // Sélectionne toutes les images du carrousel
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-carrousel-js");
    
    // Tableau avec les variables des numéros d'images
    const imageNumbers = [a, b, c];

    images.forEach((img, index) => {
      if (imageNumbers[index] !== undefined) {
        img.src = `img/${nameGalerie}/image${imageNumbers[index]}.jpg`;
      }
    });
  });
</script>

<section class="container-carrousel">
    <div class="slideshow-container">
        <img class="img-carrousel-js slide active" src="" alt="Image 1">
        <img class="img-carrousel-js slide" src="" alt="Image 2">
        <img class="img-carrousel-js slide" src="" alt="Image 3">
    </div>
</section>


<section class="bouton-galerie">
  <button class="bouton-galerie-photo police3" onclick="openModal()">Voir la galerie</button>
</section>

<!-- Modale -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">✖</span>
    <aside class="container-galerie-image">
    <div class="gallery" id="gallery"></div>
    </aside>
  </div>
</div>