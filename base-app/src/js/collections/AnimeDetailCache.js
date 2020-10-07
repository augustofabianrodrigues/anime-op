define(['backbone', 'models/AnimeDetail'], function (Backbone, AnimeDetail) {
  var AnimeDetailCache = Backbone.Collection.extend({
    model: AnimeDetail,
  });

  return AnimeDetailCache;
});
