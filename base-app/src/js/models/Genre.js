define(['backbone'], function (Backbone) {
  var Genre = Backbone.RelationalModel.extend({
    defaults: {
      type: 'genres',
    },
  });

  Backbone.modelFactory.registerModel(Genre);

  return Genre;
});
