const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
require('laravel-mix-alias');

mix.alias({
    '@': '/resources/js',
    '~': '/resources/js/assets/scss',
});

mix.js('resources/js/main.js', 'public/js')
    .sass('resources/js/assets/scss/style.scss', 'public/css')
    .version();
