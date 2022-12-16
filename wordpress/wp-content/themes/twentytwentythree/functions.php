<?php

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
