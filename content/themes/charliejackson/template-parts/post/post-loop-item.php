<article class="ProjectLoopItem">
	<a class="ProjectLoopItem-imageLink" href="<?php cj_the_post_permalink(); ?>">
    <?php if ('' !== get_the_post_thumbnail()): ?>
			<?php the_post_thumbnail('thumbnail', array('class' => 'ProjectLoopItem-image')); ?>
    <?php else: ?>
      <img class="ProjectLoopItem-image" src="https://unsplash.it/200/200" />
    <?php endif; ?>
	</a>

  <div class="ProjectLoopItem-text">
    <a class="ProjectLoopItem-titleLink" href="<?php cj_the_post_permalink(); ?>">
      <?php the_title( '<h3 class="ProjectLoopItem-title">', '</h3>' ); ?>
    </a>

    <div class="ProjectLoopItem-meta">
      <p class="ProjectLoopItem-date">Last Updated: <?php the_date(); ?></p>
    </div>

    <div class="ProjectLoopItem-content">
      <?php the_excerpt(); ?>
    </div>

    <a class="ProjectLoopItem-readMore" href="<?php cj_the_post_permalink(); ?>">Read More</a>
  </div>
</article>
