define([
  'jquery',
  'underscore',
  'backbone',
  'collections/AnimeSearchResults',
  'collections/AnimeDetailCache',
  'collections/Genres',
  'models/AnimeDetail',
  'tpl!templates/home/app-template.tpl',
], function (
  $,
  _,
  Backbone,
  AnimeSearchResults,
  AnimeDetailCache,
  Genres,
  AnimeDetail,
  appTemplate
) {
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

    _updateGenres: function () {
      this._animeOpApp.genres = this._genres.models.map(function (genre) {
        return Object.assign({ id: genre.id }, genre.attributes);
      });
    },

    _setAnimeDetails: function (anime) {
      console.log(anime);
    },

    initialize: function () {
      this._animeSearchResults = new AnimeSearchResults();
      this._animeDetailCache = new AnimeDetailCache();
      this._genres = new Genres();
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

      this._genres.on('reset', function () {
        self._updateGenres();
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

      animeOpApp.on('loadgenres', function () {
        self._genres.load();
      });

      animeOpApp.on('loadanimedetails', function (event) {
        var id = event.detail;
        var cached = self._animeDetailCache.get(id);
        if (cached) {
          return self._setAnimeDetails(cached);
        }

        var anime = new AnimeDetail({ id: id });

        anime.once('sync', function () {
          self._animeDetailCache.add(anime);
          self._setAnimeDetails(anime);
        });

        anime.load();
      });
    },
  });

  return AppView;
});
