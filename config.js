System.config({
  "baseURL": "dist",
  "paths": {
    "*": "*.js",
    "es6preso/*": "src/*.js",
    "bower_components/*": "../bower_components/*.js"
  }
});

System.config({
  "meta": {
    "bower_components/materialize/dist/js/materialize.min": {
      "format": "global",
      "deps": ["jquery"]
    }
  }
});

System.config({
  "map": {
    "css": "bower_components/plugin-css/css",
    "jquery": "bower_components/jquery/dist/jquery",
    "material": "bower_components/materialize/dist/js/materialize.min"
  }
});

