define(['backbone'], function (Backbone) {
  var Genre = Backbone.RelationalModel.extend({
    defaults: {
      type: 'genres',
    },
  });

  return Genre;
});
