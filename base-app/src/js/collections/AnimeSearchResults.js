define(['backbone', 'config', 'models/AnimeSearchItem'], function (
  Backbone,
  config,
  AnimeSearchItem
) {
  var fields = {
    anime: ['canonicalTitle', 'averageRating', 'subtype', 'posterImage', 'episodeCount'],
  };

  var AnimeSearchResults = Backbone.Collection.extend({
    model: AnimeSearchItem,
    url: config.api.path + '/anime',

    initialize: function () {
      this._links = {};
    },

    handleLinks: function (links) {
      this._links = links;
    },

    hasMore: function () {
      return Boolean(this._links.next);
    },

    query: function (input) {
      var ageRatings =
        (input.ageRatings.length && input.ageRatings.join(',')) || undefined;
      var genres = (input.genres.length && input.genres.join(',')) || undefined;

      this.fetch({
        reset: true,
        data: {
          'fields[anime]': fields.anime.join(','),
          'filter[text]': input.query || undefined,
          'filter[ageRating]': ageRatings,
          'filter[genre]': genres,
          'page[limit]': config.api.pageLimit,
        },
        success: function (collection) {
          console.log('success', arguments);
        },
        error: function () {
          console.log('error', arguments);
        },
      });
    },

    next: function () {
      if (this.hasMore()) {
        this.fetch({
          remove: false,
          url: this._links.next,
        });
      }
    },
  });

  return AnimeSearchResults;
});
