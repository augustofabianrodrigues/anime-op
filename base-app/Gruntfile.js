module.exports = function (grunt) {
  var target = grunt.option('env') || 'development';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true,
        },
        ignores: ['src/js/libs/**/*.js'],
      },
    },

    requirejs: {
      development: {
        options: {
          baseUrl: './src/js',
          mainConfigFile: 'src/js/main.js',
          name: 'main',
          out: 'public/js/main.bundle.js',
          optimize: 'none',
        },
      },
      production: {
        options: {
          baseUrl: './src/js',
          mainConfigFile: 'src/js/main.js',
          name: 'main',
          out: 'public/js/main.bundle.js',
          optimize: 'uglify',
        },
      },
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['build'],
      options: {
        atBegin: true,
      },
    },

    clean: {
      build: ['build'],
    },

    copy: {
      build: {
        expand: true,
        cwd: 'public',
        src: '**',
        dest: 'build/',
      },
    },

    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'build/index.html': 'build/index.html',
        },
      },
    },

    uglify: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'build/js',
            src: '**/*.js',
            dest: 'build/js',
            rename: function (dst, src) {
              return dst + '/' + src;
            },
          },
        ],
      },
    },

    cacheBust: {
      build: {
        options: {
          assets: ['js/**'],
          baseDir: './build/',
          deleteOriginals: true,
        },
        cwd: 'build/',
        src: ['index.html', 'js/*'],
        urlPrefixes: ['js/main.bundle.js', 'js/require.js'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-cache-bust');

  var buildSteps = ['jshint', 'requirejs:' + target];

  if (target === 'production') {
    buildSteps.push('clean:build');
    buildSteps.push('copy:build');
    buildSteps.push('htmlmin:build');
    buildSteps.push('uglify:build');
    buildSteps.push('cacheBust:build');
  }

  grunt.registerTask('build', buildSteps);
};
