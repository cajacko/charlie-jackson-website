<?php

function cj_the_post_permalink($id = false, $echo = true) {
  global $post;
  $post_slug = $post->post_name;
  $permalink = '/' . $post_slug . '/';

  if ($echo) {
    echo $permalink;
  }

  return $permalink;
}
