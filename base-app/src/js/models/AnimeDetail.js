define([
  'backbone',
  'config',
  'models/Category',
  'models/MediaCharacter',
  'models/Genre',
  'models/StreamingLink',
], function (Backbone, config, Category, MediaCharacter, Genre, StreamingLink) {
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

    mediaCharacters: ['character'],

    characters: [
      'names',
      'canonicalName',
      'otherNames',
      'description',
      'image',
    ],

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
        relatedModel: MediaCharacter,
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
          'fields[mediaCharacters]': fields.mediaCharacters.join(','),
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
