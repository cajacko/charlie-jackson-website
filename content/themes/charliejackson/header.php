<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="stylesheet" href="/content/themes/charliejackson/styles/css/lib.css">
  <link rel="stylesheet" href="/content/themes/charliejackson/styles/css/style.css">
</head>

<body>

  <header>
    <?php
    $author_id = get_user_by('login', 'charlie')->ID;
    mt_profile_img( $author_id, array(
        'size' => 'thumbnail',
        'attr' => array( 'alt' => 'Alternative Text' ),
        'echo' => true )
    );
    ?>
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p><?php bloginfo( 'description', 'display' ); ?><p>
  </header>
