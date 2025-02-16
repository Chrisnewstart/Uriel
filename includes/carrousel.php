<section class="carrousel">
<div class="container-images" id="gallery1"></div>
</section><br>

<section class="bouton-galerie">
  <button class="bouton-galerie-photo police3" onclick="openModal()">Voir la galerie</button>
</section>

<!-- Modale -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">✖</span>
    <aside class="container-galerie-image">
    <!-- Les images portrait sont en 100px 200px. Les images en paysages sont en 200px 100px -->
    <div class="gallery" id="gallery2"></div>
    </aside>
  </div>
</div>