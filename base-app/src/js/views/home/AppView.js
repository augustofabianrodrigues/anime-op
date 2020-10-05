define([
  'jquery',
  'underscore',
  'backbone',
  'collections/AnimeCollection',
  'tpl!templates/home/app-template.tpl',
], function ($, _, Backbone, AnimeCollection, appTemplate) {

  var AppView = Backbone.View.extend({
    el: $('#router-view'),

    initialize: function () {
      this._animeCollection = new AnimeCollection();
      this._animeOpApp = null;

      var self = this;
      this._animeCollection.on('update', function () {
        self._animeOpApp.sampleList = self._animeCollection.models
          .map(function (anime) {
            return anime.attributes.canonicalTitle;
          });
      });
    },

    render: function () {
      this.$el.html(appTemplate({
        animes: []
      }));

      var animeOpApp = this.$el.find('anime-op-app');

      this._animeOpApp = animeOpApp[0];
      var self = this;
      animeOpApp.on('my-event', function () {
        self._animeCollection.query('nanatsu');
      });
    },

  });

  return AppView;

});