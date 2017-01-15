<article class="Project">
  <?php the_title( '<h2 class="Project-title">', '</h2>' ); ?>

  <div class="Project-meta">
    <p class="Project-date">Last Updated: <?php the_date(); ?></p>
  </div>

  <div class="Project-content">
    <?php the_content(); ?>
  </div>
</article>
