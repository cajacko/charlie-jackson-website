<?php

define('NOW_NAME', 'charliejackson_now');
define('NOW_MENU_PAGE_NAME', 'now_menu_page');
define('NOW_SETTINGS_FIELDS', 'now_settings');
define('NOW_SETTINGS_SECTION', 'now_setting_section');

function render_now_input() {
  $now_desc = get_option(NOW_NAME);

  wp_editor($now_desc, NOW_NAME, array(
    'media_buttons' => false,
    'textarea_name' => NOW_NAME
  ));
}

function now_setting_section_callback_function() {
 	echo '<p>What are you doing now?</p>';
}

function now_menu_page() {
  ?>
  <form method="post" action="options.php">
    <?php
    settings_fields(NOW_SETTINGS_FIELDS);
    do_settings_sections(NOW_MENU_PAGE_NAME);
    ?>

    <input name="Submit" class="button-primary" type="submit" value="<?php esc_attr_e('Save Changes'); ?>" />
  </form>
  <?php
}

function add_now_menu() {
  add_theme_page(
    'Now',
    'Now',
    'manage_options',
    'now',
    'now_menu_page'
  );

  add_settings_section(
		NOW_SETTINGS_SECTION,
		'Now',
		'now_setting_section_callback_function',
		NOW_MENU_PAGE_NAME
	);

  add_settings_field(
    NOW_NAME,
    'Now summary text',
    'render_now_input',
    NOW_MENU_PAGE_NAME,
    NOW_SETTINGS_SECTION
  );

  register_setting(NOW_SETTINGS_FIELDS, NOW_NAME);
}

add_action('admin_menu', 'add_now_menu');
