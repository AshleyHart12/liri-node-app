require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

var action = process.argv[2];
var command = process.argv[3];


 switch(command) {
    case 'concert-this':
    bandsintown(command);
    break;

    case 'spotify-this-song':
    spotifySong(command);
    break;

    case 'movie-this':
    movieName(command);
    break;

    case 'do-what-it-says':
    doIt(command);
    break;

    default:
    console.log("Please enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says");
    break;
}


// Concert-This



// Spotify-This-Song


// Movie-This
var movieName = process.argv[2];

var queryURL2 = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryURL2);

axios.get(queryURL2).then(function(response) {
    if (movieName === ""){
        console.log("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
    } else {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.Rated)
    console.log("Rotten Tomatoes Rating: " + response.data.Value)
    console.log("Country produced: " + response.data.Country)
    console.log("Language: " + response.data.Language)
    console.log("Plot: " + response.data.Plot)
    console.log("Actors: " + response.data.Actors)
    };
}
);

// Do-What-It-Says






