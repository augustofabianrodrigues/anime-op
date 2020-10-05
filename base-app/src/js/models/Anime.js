define([
  'backbone',
], function (Backbone) {
  var Anime = Backbone.RelationalModel.extend({
    defaults: {
      type: 'anime'
    },
    // urlRoot: 'https://kitsu.io/api/edge/anime',
    // url: 'https://kitsu.io/api/edge/anime',
  });

  return Anime;
});