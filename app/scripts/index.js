var $ = require('jquery');
var handlebars = require('handlebars');

var albums = [
  {
    "title": "Album 1",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/75/75"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 3", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 4", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"}
    ]
  },
  {
    "title": "Album 2",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/75/75"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 3", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 4", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"}
    ]
  },
  {
    "title": "Album 3",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/75/75"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 3", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 4", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"}
    ]
  },
  {
    "title": "Album 4",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/75/75"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 3", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 4", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"}
    ]
  }
];

var totalAlbums = albums.length;

var source = $('#header-template').html();
var template = handlebars.compile(source);
var context = {"count": totalAlbums};
var renderTemplate = template(context);

$('.container').html(renderTemplate);


var albumTile = $('#album-tile').html();
var albumTileTemplate = handlebars.compile(albumTile);

var context = {'albums': albums};

var renderedTemplate = albumTileTemplate(context);

$('.container').append(renderedTemplate);
