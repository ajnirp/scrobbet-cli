'use strict';

var request = require('request'),
    readline = require('readline-sync'),
    colors = require('colors/safe'),
    id3 = require('id3js');

var root = 'http://musicbrainz.org/ws/2/'

var prompt = colors.green('Search for artist') + colors.yellow(' >>> ');

// Ctrl-C to quit
while (true) {
  var artist = readline.question(prompt);
  if (artist === "") break;
  console.log('Searching for artist: ' + colors.yellow(artist));
}
