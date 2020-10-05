define([
  'jquery',
  'underscore',
  'backbone',
  'backbone-relational',
  'backbone-relational-jsonapi',
  'router',
  'anime-op-app',
], function (
  $,
  _,
  Backbone,
  BackboneRelational,
  BackboneRelationalJsonApi,
  Router,
  AnimeOpApp
) {
  var initialize = function () {
    console.log(AnimeOpApp);
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return {
    initialize: initialize,
  };
});
