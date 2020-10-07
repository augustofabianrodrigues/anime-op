define(['backbone'], function (Backbone) {
  var Character = Backbone.RelationalModel.extend({
    defaults: {
      type: 'characters',
    },
  });

  Backbone.modelFactory.registerModel(Character);

  return Character;
});
