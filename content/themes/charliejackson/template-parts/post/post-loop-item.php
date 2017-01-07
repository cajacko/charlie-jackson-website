<article>
  <?php if ('' !== get_the_post_thumbnail()): ?>
		<div class="post-thumbnail">
			<a href="<?php cj_the_post_permalink(); ?>">
				<?php the_post_thumbnail(); ?>
			</a>
		</div>
	<?php endif; ?>

  <a href="<?php cj_the_post_permalink(); ?>"><?php the_title( '<h2>', '</h2>' ); ?></a>
  <div>
    <p>Last Updated: <?php the_date(); ?></p>
  </div>

  <div>
    <?php the_excerpt(); ?>
  </div>

  <a href="<?php cj_the_post_permalink(); ?>">Read More</a>

</article>
