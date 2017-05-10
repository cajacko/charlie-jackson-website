<div class="Projects">
  <h2 class="Projects-title">
    <?php if (is_category() || is_tag()): ?>
      <?php single_term_title('Projects: '); ?>
    <?php else: ?>
      Projects
    <?php endif; ?>
  </h2>
  <?php
  if ( have_posts() ) : ?>

    <main id="Projects-loop" class="Projects-loop">
      <?php
      while ( have_posts() ) : the_post();

        get_template_part( 'template-parts/post/post-loop-item' );

      endwhile;
      ?>
    </main>

    <?php
    the_posts_pagination( array(
      'prev_text' => '<span id="Projects-prev">Previous page</span>',
      'next_text' => '<span id="Projects-next">Next Page</span>'
    ) );

  else :

    // get_template_part( 'template-parts/post/content', 'none' );

  endif;
  ?>
</div>
