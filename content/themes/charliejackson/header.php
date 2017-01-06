<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
</head>

<body>

  <header>
    <img src="<?php echo get_avatar_url(get_user_by('login', 'charlie')->ID); ?>" />
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p><?php bloginfo( 'description', 'display' ); ?><p>
  </header>
