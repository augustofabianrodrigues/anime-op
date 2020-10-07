define(['backbone'], function (Backbone) {
  var Category = Backbone.RelationalModel.extend({
    defaults: {
      type: 'categories',
    },
  });

  Backbone.modelFactory.registerModel(Category);

  return Category;
});
