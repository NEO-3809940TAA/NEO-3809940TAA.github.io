const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './',
    middleware: [
      function(req, res, next) {
        if (req.url !== '/' && !req.url.match(/\.(html|css|js|json|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/)) {
          req.url = '/404.html';
        }
        next();
      }
    ]
  },
  port: 9090,
  open: '/index.html',
  files: ['**/*.html', '**/*.css', '**/*.js', '**/*.json'],
  watchOptions: {
    ignoreInitial: true
  },
  notify: false,
  logLevel: 'silent'
});

