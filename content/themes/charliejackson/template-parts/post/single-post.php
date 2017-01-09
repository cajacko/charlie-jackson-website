<article class="Project">
  <?php the_title( '<h2 class="Project-title">', '</h2>' ); ?>

  <div class="Project-meta">
    <p class="Project-date">Last Updated: <?php the_date(); ?></p>
  </div>

  <?php if ('' !== get_the_post_thumbnail()): ?>
			<?php the_post_thumbnail('large', array('class' => 'Project-image')); ?>
	<?php endif; ?>

  <div class="Project-content">
    <?php the_content(); ?>
  </div>
</article>
