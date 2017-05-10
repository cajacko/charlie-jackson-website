<!DOCTYPE html>
<html <?php language_attributes(); ?> class="Html">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link rel="stylesheet" href="/content/themes/charliejackson/styles/css/lib.css">
  <link rel="stylesheet" href="/content/themes/charliejackson/styles/css/style.min.css">
</head>

<body class="Body">

  <header class="SiteHeader">
    <a class="SiteHeader-imageLink" href="/">
      <?php
      $author_id = get_user_by('login', 'charlie')->ID;
      mt_profile_img( $author_id, array(
          'size' => 'thumbnail',
          'attr' => array(
            'alt' => 'Charlie Jackson profile picture',
            'class' => 'SiteHeader-image'
          ),
          'echo' => true )
      );
      ?>
    </a>
    <div class="SiteHeader-text">
      <a class="SiteHeader-titleLink" href="/">
        <h1 class="SiteHeader-title"><?php bloginfo( 'name' ); ?></h1>
      </a>
      <p class="SiteHeader-description"><?php bloginfo( 'description', 'display' ); ?></p>
    </div>
  </header>
