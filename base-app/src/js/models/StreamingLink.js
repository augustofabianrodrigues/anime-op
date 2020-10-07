define(['backbone', 'models/Streamer'], function (Backbone, Streamer) {
  var StreamingLink = Backbone.RelationalModel.extend({
    defaults: {
      type: 'streamingLinks',
    },

    relations: [
      {
        type: Backbone.HasOne,
        key: 'streamer',
        relatedModel: Streamer,
      },
    ],
  });

  Backbone.modelFactory.registerModel(StreamingLink);

  return StreamingLink;
});
