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

    _mapAnimeDetail: function (model) {
      var attributes = model.attributes;

      return {
        id: attributes.id,
        ageRating: attributes.ageRating,
        ageRatingGuide: attributes.ageRatingGuide,
        averageRating: parseFloat(attributes.averageRating) || undefined,
        canonicalTitle: attributes.canonicalTitle,
        episodeCount: parseInt(attributes.episodeCount) || undefined,
        subtype: attributes.subtype,
        synopsis: attributes.synopsis,
        titles: attributes.titles,
        youtubeVideoId: attributes.youtubeVideoId,

        categories: (
          (attributes.categories && attributes.categories.models) ||
          []
        ).map(function (category) {
          return {
            slug: category.attributes.slug,
            title: category.attributes.title,
          };
        }),

        characters: (
          (attributes.characters && attributes.characters.models) ||
          []
        )
          .filter(function (mediaCharacter) {
            return (
              mediaCharacter.attributes.character &&
              mediaCharacter.attributes.character.attributes.image &&
              mediaCharacter.attributes.character.attributes.image.original
            );
          })
          .map(function (mediaCharacter) {
            var character = mediaCharacter.attributes.character;

            return {
              id: character.attributes.id,
              canonicalName: character.attributes.canonicalName,
              names: character.attributes.names,
              description: character.attributes.description,
              image: character.attributes.image,
              otherNames: character.attributes.otherNames,
            };
          }),

        genres: (
          (attributes.genres.models && attributes.genres.models) ||
          []
        ).map(function (genre) {
          return {
            slug: genre.attributes.slug,
            name: genre.attributes.name,
          };
        }),

        streamers: (
          (attributes.streamingLinks && attributes.streamingLinks.models) ||
          []
        )
          .map(function (streamingLink) {
            return {
              id: streamingLink.attributes.id,
              url: streamingLink.attributes.url,
              siteName:
                streamingLink.attributes.streamer &&
                streamingLink.attributes.streamer.attributes.siteName,
            };
          })
          .filter(function (streamer) {
            return streamer.siteName && streamer.url;
          }),
      };
    },

    _setAnimeDetail: function (anime) {
      var mappedAnimeDetail = this._mapAnimeDetail(anime);
      this._animeOpApp.animeDetail = mappedAnimeDetail;
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

      animeOpApp.on('loadanimedetail', function (event) {
        var id = event.detail;
        var cached = self._animeDetailCache.get(id);
        if (cached) {
          return self._setAnimeDetail(cached);
        }

        var anime = new AnimeDetail({ id: id });

        anime.once('sync', function () {
          self._animeDetailCache.add(anime);
          self._setAnimeDetail(anime);
        });

        anime.load();
      });
    },
  });

  return AppView;
});
