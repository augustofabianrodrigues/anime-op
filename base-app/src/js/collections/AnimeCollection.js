define([
  'backbone',
  'config',
  'models/Anime'
], function (Backbone, config, Anime) {
  console.log(config);
  var AnimesCollection = Backbone.Collection.extend({
    model: Anime,
    url: config.baseApiPath + '/anime',

    initialize: function () {
      this._links = {};
    },

    handleLinks: function (links) {
      this._links = links;
    },

    query: function (text) {
      this.fetch({
        // reset: true,
        data: {
          'page[limit]': 20,
          'fields[anime]': 'canonicalTitle',
        },
        success: function (collection) {
          console.log('success', arguments);
        },
        error: function () {
          console.log('error', arguments);
        },
      })
    },
  });

  return AnimesCollection;
});