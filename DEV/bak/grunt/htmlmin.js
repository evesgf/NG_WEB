module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'src/app/common/layout/blocks/header.html/',
          src: ['*.html', '**/*.html'],
          dest: 'dist/app/common/layout/blocks/header.html/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}