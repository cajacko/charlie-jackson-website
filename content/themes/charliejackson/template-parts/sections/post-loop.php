<main>
  <h2>Projects</h2>
  <div>
    <?php
    if ( have_posts() ) :

      while ( have_posts() ) : the_post();

        get_template_part( 'template-parts/post/post-loop-item' );

      endwhile;
    else :

      // get_template_part( 'template-parts/post/content', 'none' );

    endif;
    ?>
  </div>
</main>
