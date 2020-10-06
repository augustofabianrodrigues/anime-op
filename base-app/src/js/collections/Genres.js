define(['backbone', 'config', 'models/AnimeSearchItem'], function (
  Backbone,
  config,
  AnimeSearchItem
) {
  var fields = {
    genres: ['name', 'slug'],
  };

  var Genres = Backbone.Collection.extend({
    model: AnimeSearchItem,
    url: config.api.path + '/genres',

    load: function () {
      this.fetch({
        reset: true,
        data: {
          'fields[genres]': fields.genres.join(','),
          'page[limit]': 100,
        },
        error: function () {
          console.error('error getting genres', arguments);
        },
      });
    },
  });

  return Genres;
});
