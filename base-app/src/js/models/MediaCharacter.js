define(['backbone', 'models/Character'], function (Backbone, Character) {
  var MediaCharacter = Backbone.RelationalModel.extend({
    defaults: {
      type: 'mediaCharacters',
    },

    relations: [
      {
        type: Backbone.HasOne,
        key: 'character',
        relatedModel: Character,
      },
    ],
  });

  Backbone.modelFactory.registerModel(MediaCharacter);

  return MediaCharacter;
});
