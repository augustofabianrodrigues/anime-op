require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',

    backbone: 'libs/backbone/backbone',
    'backbone-relational': 'libs/backbone/backbone-relational',
    'backbone-relational-jsonapi': 'libs/backbone/backbone-relational-jsonapi',

    'anime-op-app': '../../../web-components/build/appBundle.min',

    tpl: 'libs/require/tpl',
    templates: '../templates',
  },

  shim: {
    underscore: { exports: '_' },
    jquery: { exports: '$' },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone',
    },
    'backbone-relational': {
      deps: ['backbone'],
      exports: 'Backbone',
    },
    'backbone-relational-jsonapi': {
      deps: ['backbone-relational', 'underscore'],
    },
  },
});

require(['app'], function (App) {
  App.initialize();
});
