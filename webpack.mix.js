let mix = require('laravel-mix');
require('mix-tailwindcss');
require('mix-html-builder');

mix.webpackConfig({
    output: {
        // fix prepend slash (/) in js bundle path in mix-html-builder
        publicPath: './',
    },
});

//HTML
mix.html({
    htmlRoot: './src/*.html', // Your html root file(s)
    output: './', // The html output folder
    partialRoot: './src/partials', // default partial path
    layoutRoot: './src/layouts', // default partial path
    inject: true,
    minify: {
        removeComments: false,
    },
});

// JavaScript
mix.js(
    [
        'src/js/app.js',
        'src/js/fix-mix-html-builder.js',
        'src/js/phonenumber.js',
        'src/js/textarea.js',
        'src/js/navbar.js',
        'src/js/dropdown.js',
    ],
    'js/app.js'
);

// SASS
mix.sass('src/scss/app.scss', 'css/app.css');
mix.sass('src/scss/tailwind.scss', 'css/tailwind.css').tailwind(
    './tailwind.config.js'
);

// Copy Fonts
// mix.copyDirectory('./src/fonts', './public/fonts');

// Setup
mix.extract();
mix.setPublicPath('public/');
