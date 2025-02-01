
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photographe de portrait</title>
  <meta name="description" content="Le photographe Uriel vous propose des prestations photo de portrait, paysage et aventure"/>
  <link rel="shortcut icon" type="image/png" href="upload/logo/png.png" alt="logo site web uriel"/>
  <link href="css/style.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
  <script src="../js"defer ></script>
</head>
<body>

<header>
  <?php include('includes/navbar.php'); ?>
</header> 

<main>
<?php
// Déterminer quel contenu afficher en fonction de la page demandé
$page = isset($_GET['page']) ? $_GET['page'] : 'home'; // Page par defaut est home

// Inclure le contenu spécifique à la page
switch ($page) {
  case 'portrait':
    include('portrait.php');
    break;
  case 'paysage' :
    include('paysage.php');
    break;
  case 'blog' :
    include('blog.php');
    break;
  case 'home' :
  default:
    include('home.php');
    break;
}
?>
</main>

<footer>
  <?php include('includes/footer.php'); ?>
</footer>

</body>
</html>