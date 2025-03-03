<div class="section-menu-deroulant">
  <img src="img/divers/uriel.png" alt="Logo" class="logo">
  <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
</div>
    
    <nav id="menu" class="hidden nav-menu-deroulant police1">
        <div class="menu-content">
            <span class="close-icon" onclick="toggleMenu()">&times;</span>
            <ul class="ul-deroulant">
                <li class="li-deroulant"><a href ="?page=home" class="a-deroulant">home</a></li>
                <li class="li-deroulant"><a href="?page=paysage" class="a-deroulant">paysage</a></li>
                <li class="li-deroulant"><a href="?page=portrait" class="a-deroulant">portrait</a></li>
                <li class="li-deroulant"><a href="?page=aventure" class="a-deroulant">aventure</a></li>
                <li class="li-deroulant"><a href="?page=animaux" class="a-deroulant">animaux</a></li>
                <li class="li-deroulant"><a href="?page=sport" class="a-deroulant">sport</a></li>
                <li class="li-deroulant"><a href="?page=contact" class="a-deroulant">contact</a></li>
            </ul>
        </div>
    </nav>

    <script>
        function toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        }
    </script>
