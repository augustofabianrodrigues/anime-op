define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/AppView'
], function($, _, Backbone, AppView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function () {

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
       // We have no matching route, lets display the home page 
        var appView = new AppView();
        appView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
