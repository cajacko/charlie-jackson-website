<div class="Projects">
  <h2 class="Projects-title">Projects</h2>
  <?php
  if ( have_posts() ) : ?>

    <main class="Projects-loop">
      <?php
      while ( have_posts() ) : the_post();

        get_template_part( 'template-parts/post/post-loop-item' );

      endwhile;
      ?>
    </main>

    <?php
    the_posts_pagination( array(
      'prev_text' => '<span>Previous page</span>',
      'next_text' => '<span>Next Page</span>'
    ) );

  else :

    // get_template_part( 'template-parts/post/content', 'none' );

  endif;
  ?>
</div>
