<article>
  <?php the_title( '<h2>', '</h2>' ); ?>
  <div>
    <p>Last Updated: <?php the_date(); ?></p>
  </div>

  <?php if ('' !== get_the_post_thumbnail()): ?>
		<div class="post-thumbnail">
			<?php the_post_thumbnail(); ?>
		</div>
	<?php endif; ?>

  <div>
    <?php the_content(); ?>
  </div>
</article>
