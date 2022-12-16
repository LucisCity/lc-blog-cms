<?php


function str_replace_first($haystack, $needle, $replace) {
  $pos = strpos($haystack, $needle);
  if ($pos !== false) {
      $haystack = substr_replace($haystack, $replace, $pos, strlen($needle));
  }

  return $haystack;
}

/**
 * Alter base url from https://news-api.domain.com to https://news.domain.com
 * This is special design for WP_SITE_URL = news-api.domain.com
 * and Frontend url = news.domain.com (use wp as headless cms)
 *
 * @param  string $loc url to alter
 * @return string
 */
function lucis_alter_url_for_headless_cms($loc) {
  echo '$loc: ' . $loc;
  $s = str_replace_first($loc, '//news-api.', '//news.');
  echo '$s: ' . $s;
  return $s;
}

add_filter( 'rank_math/sitemap/base_url', 'lucis_alter_url_for_headless_cms', 10, 1);
// Usage: $value = apply_filters( 'rank_math/sitemap/base_url', $site_url);


