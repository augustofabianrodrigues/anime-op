module.exports = function (grunt) {
  var target = grunt.option('env') || 'development';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
        },
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

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true,
        },
        ignores: ['src/js/libs/**/*.js'],
      },
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['build'],
      options: {
        atBegin: true
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint', 'requirejs:' + target]);
};
