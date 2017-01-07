<main>
  <?php
    /* Start the Loop */
    while ( have_posts() ) : the_post();

      get_template_part('template-parts/post/single-post');

    endwhile; // End of the loop.
  ?>
</main>
