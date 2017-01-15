<?php
function cj_login_form_style() {
    wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/styles/css/style-login.css');
}

add_action('login_enqueue_scripts', 'cj_login_form_style');
