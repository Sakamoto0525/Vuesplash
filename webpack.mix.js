const mix = require("laravel-mix");

// browserSync : JavaScriptやPHPファイルが変更されたときに自動的にブラウザがリロードされるようになります
mix.browserSync("vuesplash.test")
    .js("resources/js/app.js", "public/js") // JavaScript と Vue コンポーネントをコンパイルします。第一引数がコンパイル対象のファイル、第二引数がコンパイル結果の配置先です。
    .sass("resources/sass/app.scss", "public/css") // Sass または Scss ファイルをコンパイルします。
    .version();
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

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
