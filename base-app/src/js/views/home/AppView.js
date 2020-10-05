define([
  'jquery',
  'underscore',
  'backbone',
  'collections/AnimeSearchResults',
  'tpl!templates/home/app-template.tpl',
], function ($, _, Backbone, AnimeSearchResults, appTemplate) {
  var AppView = Backbone.View.extend({
    el: $('#router-view'),

    _updateSearchResults: function () {
      this._animeOpApp.searchResults = {
        loading: false,
        hasMore: this._animeSearchResults.hasMore(),
        items: this._animeSearchResults.models.map(function (anime) {
          return Object.assign({ id: anime.id }, anime.attributes);
        }),
      };
    },

    initialize: function () {
      this._animeSearchResults = new AnimeSearchResults();
      this._animeOpApp = null;

      var self = this;
      this._animeSearchResults.on('reset', function () {
        self._updateSearchResults();
      });
      this._animeSearchResults.on('update', function () {
        self._updateSearchResults();
      });
      this._animeSearchResults.on('request', function () {
        self._updateSearchResults();
        self._animeOpApp.searchResults = Object.assign(
          {},
          self._animeOpApp.searchResults,
          { loading: true }
        );
      });
    },

    render: function () {
      this.$el.html(appTemplate({}));

      var animeOpApp = this.$el.find('anime-op-app');
      this._animeOpApp = animeOpApp[0];

      var self = this;
      animeOpApp.on('search', function (event) {
        self._animeSearchResults.query(event.detail);
      });
      animeOpApp.on('loadmore', function () {
        self._animeSearchResults.next();
      });
    },
  });

  return AppView;
});
