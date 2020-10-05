define(['backbone'], function (Backbone) {
  var AnimeSearchItem = Backbone.RelationalModel.extend({
    defaults: {
      type: 'anime',
    },
  });

  return AnimeSearchItem;
});
