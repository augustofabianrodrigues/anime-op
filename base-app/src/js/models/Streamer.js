define(['backbone'], function (Backbone) {
  var Streamer = Backbone.RelationalModel.extend({
    defaults: {
      type: 'streamers',
    },
  });

  Backbone.modelFactory.registerModel(Streamer);

  return Streamer;
});
