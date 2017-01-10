<?php
if(!$_GET['ajax']) {
  get_header();
  get_template_part('template-parts/sections/now');
  get_template_part('template-parts/sections/social');
}

get_template_part('template-parts/sections/post-loop');

if(!$_GET['ajax']) {
  get_footer();
}
