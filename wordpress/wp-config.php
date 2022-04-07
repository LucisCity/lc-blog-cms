<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', getenv('MYSQL_DATABASE') );

/** Database username */
define( 'DB_USER', getenv('MYSQL_USER') );

/** Database password */
define( 'DB_PASSWORD', getenv('MYSQL_PASSWORD') );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'FLGO(po_TCSi8S1}Q<[/BGZmdOdD_GgioeUJiD5+p3!t(#3BX5[<h?xbsKn H#I*' );
define( 'SECURE_AUTH_KEY',  'Qi[`HLxw4NTbB.FhRw|=AU4-:e7U_Ek<Vu7oMFUV4dRJ!z+3t^TVI:c/)>`Ms0E_' );
define( 'LOGGED_IN_KEY',    'eX%)$]`b% >bsJo!VWhCle[`v>x`xLN?fo9/Z.;O=T$kl=a3=~Qn1$[aDmlX&3z=' );
define( 'NONCE_KEY',        'ykJ60$P~#?udz?:dHzR3i]X6H=(6Kh3o[?jI9PLWzOTg%7U1r]Tsq||5/ }s4yvZ' );
define( 'AUTH_SALT',        'uH]8*N+Ry3v;e%@N6+r43NsqwT~Mc h$FjfSgl%tyjWt|Y4me9Ht%#^qw-:~((,}' );
define( 'SECURE_AUTH_SALT', 'Hxrpn_[EH}N;2dLl)#S>h!}C&% hzA?=uH+M uBkdAC>V5Q8Q+kP u)dP5M(bGDR' );
define( 'LOGGED_IN_SALT',   '|kq?O5~dnBh<EKy:&x:%jMyHQ*1x2dZ@AQc<ORmCVO.M5&YGOMy;Ri.R(q5l- +P' );
define( 'NONCE_SALT',       'C`+S-Q-yM!wMB0ufmJ8H2!ZI3AMJ{hU1?oC;4j^2S?-zgrf+ 89_^iG>m9I4^Sao' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/*
 SSL
 We need to support SSL because of this server
 Browser ---> cloudflare --> caddy SSL -> apache non-SSL
*/
if ($_SERVER['REQUEST_SCHEME'] === 'https') {
    define('FORCE_SSL_ADMIN', true);
    // in some setups HTTP_X_FORWARDED_PROTO might contain
    // a comma-separated list e.g. http,https
    // so check for https existence
    if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false)
        $_SERVER['HTTPS']='on';
}
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
