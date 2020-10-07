define([
  'backbone',
  'config',
  'models/Category',
  'models/Character',
  'models/Genre',
  'models/StreamingLink',
], function (Backbone, config, Category, Character, Genre, StreamingLink) {
  var fields = {
    anime: [
      'synopsis',
      'titles',
      'canonicalTitle',
      'averageRating',
      'ageRating',
      'ageRatingGuide',
      'subtype',
      'episodeCount',
      'youtubeVideoId',

      // Relationships
      'categories',
      'characters',
      'genres',
      'streamingLinks',
    ],

    categories: ['title', 'slug'],
    characters: ['canonicalName', 'image'],
    genres: ['name', 'slug'],
    streamingLinks: ['url', 'subs', 'dubs', 'streamer'],
  };

  var include = [
    'categories',
    'characters.character',
    'genres',
    'streamingLinks.streamer',
  ];

  var AnimeDetail = Backbone.RelationalModel.extend({
    urlRoot: config.api.path + '/anime',

    defaults: {
      type: 'anime',
    },

    relations: [
      {
        type: Backbone.HasMany,
        key: 'categories',
        relatedModel: Category,
      },

      {
        type: Backbone.HasMany,
        key: 'characters',
        relatedModel: Character,
      },

      {
        type: Backbone.HasMany,
        key: 'genres',
        relatedModel: Genre,
      },

      {
        type: Backbone.HasMany,
        key: 'streamingLinks',
        relatedModel: StreamingLink,
      },
    ],

    load: function () {
      this.fetch({
        data: {
          include: include.join(','),
          'fields[anime]': fields.anime.join(','),
          'fields[categories]': fields.categories.join(','),
          'fields[characters]': fields.characters.join(','),
          'fields[genres]': fields.genres.join(','),
          'fields[streamingLinks]': fields.streamingLinks.join(','),
        },
        error: function () {
          console.error('error fetching anime details', arguments);
        },
      });
    },
  });

  return AnimeDetail;
});
