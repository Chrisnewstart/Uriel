<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uriel photographe normandie</title>
  <meta name="description" content="Découvrez la photographie intense d'immersion au cœur de la nature"/>
  <link rel="shortcut icon" type="image/png" href="img/divers/ceo.png" alt="logo site web uriel"/>
  <meta name="google-site-verification" content="P-iysOuwmw_WnrbJ_v0iYuVslYVmLErM2UIJ5VBz9nw" />
  <link href="css/style.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
  <script src="js/smooth.js" defer ></script>
  <script src="js/galerie-photo.js" defer></script>
  <script src="js/navbar.js"></script>
</head>
<body>

<header>
<nav id="navbar-container"></nav>

<script>
  loadNavbar();
  attachMenuToggle();
  window.addEventListener("resize", loadNavbar);
</script>

<?php 
/* Code de secour si JS plante pour la navigation le temps de regler le probleme */
/*
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$isMobile = preg_match('/(iphone|ipod|ipad|android|blackberry|webos|mobile)/i', $userAgent);

if ($isMobile) {
    include('includes/navbarResponsive.php');
} else {
    include('includes/navbar.php');
}
*/?>
</header> 

<main>
<?php
// Déterminer quel contenu afficher en fonction de la page demandé
$page = isset($_GET['page']) ? $_GET['page'] : 'home'; // Page par defaut est home

// Inclure le contenu spécifique à la page
switch ($page) {
  case 'paysage' :
    include('paysage.php');
    break;
  case 'portrait':
    include('portrait.php');
    break;
  case 'aventure' :
    include('aventure.php');
    break;
  case 'animaux' :
    include('animaux.php');
    break;
  case 'sport' :
    include('sport.php');
    break;
  case 'contact' :
    include('contact.php');
    break;
  case 'home' :
  default:
    include('home.php');
    break;
}
?>
</main>

<section class="social-bar">
  <a href="https://www.facebook.com/urielphotographe" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" class="social-icon">
  </a>
  <a href="https://www.instagram.com/urielshoot/#" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="social-icon">
  </a>
</section>

<footer>
  <?php include('includes/footer.php'); ?>
</footer>

</body>
</html>