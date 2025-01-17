<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


if ( ! function_exists( 'twentytwentytwo_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'twentytwentytwo_support' );

if ( ! function_exists( 'twentytwentytwo_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'twentytwentytwo-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Add styles inline.
		wp_add_inline_style( 'twentytwentytwo-style', twentytwentytwo_get_font_face_styles() );

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'twentytwentytwo-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'twentytwentytwo_styles' );

if ( ! function_exists( 'twentytwentytwo_editor_styles' ) ) :

	/**
	 * Enqueue editor styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_editor_styles() {

		// Add styles inline.
		wp_add_inline_style( 'wp-block-library', twentytwentytwo_get_font_face_styles() );

	}

endif;

add_action( 'admin_init', 'twentytwentytwo_editor_styles' );


if ( ! function_exists( 'twentytwentytwo_get_font_face_styles' ) ) :

	/**
	 * Get font face styles.
	 * Called by functions twentytwentytwo_styles() and twentytwentytwo_editor_styles() above.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return string
	 */
	function twentytwentytwo_get_font_face_styles() {

		return "
		@font-face{
			font-family: 'Source Serif Pro';
			font-weight: 200 900;
			font-style: normal;
			font-stretch: normal;
			font-display: swap;
			src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) . "') format('woff2');
		}

		@font-face{
			font-family: 'Source Serif Pro';
			font-weight: 200 900;
			font-style: italic;
			font-stretch: normal;
			font-display: swap;
			src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Italic.ttf.woff2' ) . "') format('woff2');
		}
		";

	}

endif;

if ( ! function_exists( 'twentytwentytwo_preload_webfonts' ) ) :

	/**
	 * Preloads the main web font to improve performance.
	 *
	 * Only the main web font (font-style: normal) is preloaded here since that font is always relevant (it is used
	 * on every heading, for example). The other font is only needed if there is any applicable content in italic style,
	 * and therefore preloading it would in most cases regress performance when that font would otherwise not be loaded
	 * at all.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_preload_webfonts() {
		?>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<?php
	}

endif;

add_action( 'wp_head', 'twentytwentytwo_preload_webfonts' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Custom max posts per page
add_filter( 'rest_post_query', 'lucis_change_post_per_page', 10, 2 );

function lucis_change_post_per_page( $args, $request ) {
    $max = max( (int) $request->get_param( 'custom_per_page' ), 200 );
    $args['posts_per_page'] = $max;
    return $args;
}

// Add custom styles for gutenberg editor
add_action( 'after_setup_theme', 'custom_editor_css' );

function custom_editor_css() {
	add_theme_support('editor-styles');
	add_editor_style('editor-style.css');
}

// Make yoast seo to work with frontity
add_action( 'rest_api_init', function () {
	foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
	  if ( 'post' === $post_type->name || $post_type->has_archive ) {
		add_filter( "rest_prepare_{$post_type->name}", function ( $response ) {
		  $type      = array_key_exists('type', $response->data) ? $response->data['type'] : '';
		  $types_url = rest_url( "wp/v2/types/$type" );

		  $response->add_links(
			array(
			  'type' => array(
				'href'       => $types_url,
				'embeddable' => true,
			  ),
			)
		  );

		  return $response;
		} );
	  }
	}
  } );

// Auto add id to all headings in post content
function prefix_heading_ids( $content ) {
	$pattern = '#(?P<full_tag><(?P<tag_name>h\d)(?P<tag_extra>[^>]*)>(?P<tag_contents>[^<]*)</h\d>)#i';
	if ( preg_match_all( $pattern, $content, $matches, PREG_SET_ORDER ) ) {
			$find = array();
			$replace = array();
			foreach( $matches as $match ) {
					$find[]    = $match['full_tag'];
					$id        = sanitize_title( $match['tag_contents'] );
					$id_attr   = sprintf( ' id="%s"', $id );
					$replace[] = sprintf( '<%1$s%2$s%3$s>%4$s</%1$s>', $match['tag_name'], $id_attr, $match['tag_extra'], $match['tag_contents']);
			}
			$content = str_replace( $find, $replace, $content );
	}
	return $content;
}

add_filter( 'the_content', 'prefix_heading_ids' );

// Auto redirect to frontity domain
function redirect_to_fronttity() {
	if (
		(strpos(site_url(), 'api.insight.lucis.network') !== false) &&
		!is_admin() &&
		!current_user_can('edit_posts')) :
	?>
		<script>
			window.location.hostname = 'insight.lucis.network'
		</script>
	<?php
	endif;
}

add_action('wp_head', 'redirect_to_fronttity');

function my_expiration_filter($seconds, $user_id, $remember){
    //if "remember me" is checked;
    if ( $remember ) {
        //WP defaults to 2 weeks;
        $expiration = MONTH_IN_SECONDS;
    } else {
        //WP defaults to 48 hrs/2 days;
        $expiration = WEEK_IN_SECONDS;
    }

    //http://en.wikipedia.org/wiki/Year_2038_problem
    if ( PHP_INT_MAX - time() < $expiration ) {
        //Fix to a little bit earlier!
        $expiration =  PHP_INT_MAX - time() - 5;
    }

    return $expiration;
}

add_filter('auth_cookie_expiration', 'my_expiration_filter', 99, 3);


/**
 * Alter base url from https://news-api.domain.com to https://news.domain.com
 * This is special design for WP_SITE_URL = news-api.domain.com
 * and Frontend url = news.domain.com (use wp as headless cms)
 *
 * ==> NOTE: DO NOT need this any more because you just
 * configure wp_options.home is your frontend url https://news.luciscity.io then it's done
 */
 *
 * @param  string $loc url to alter
 * @return string
 */
// function lucis_alter_url_for_headless_cms($loc) {
//   $s = str_replace_first($loc, '//news-api.', '//news.');
//   return $s;
// }
//
// add_filter( 'rank_math/sitemap/base_url', 'lucis_alter_url_for_headless_cms', 10, 1);
// // Usage: $value = apply_filters( 'rank_math/sitemap/base_url', $site_url);
//
// function str_replace_first($haystack, $needle, $replace) {
//   $pos = strpos($haystack, $needle);
//   if ($pos !== false) {
//       $haystack = substr_replace($haystack, $replace, $pos, strlen($needle));
//   }
//
//   return $haystack;
// }
