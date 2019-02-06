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


 


// Concert-This
function bandsInTown(action) {

var query = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
var artist = "";
    if(err) {
         console.log("Error Occurred: " + err);
        } else {
            console.log("Venue: " + response.VenueDate.name);
            console.log("location: " + response.VenueData.city);
            console.log("Date of event: " + response.VenueData.datetime);

}
};



// Spotify-This-Song
function spotifySong (action) {

    var track;
    if (action === undefined) {
        track = "The Sign ace of base";
    } else {
        track = action;
    }

    spotify.search({
        type: 'track', 
        query: track
    }, 

        function(error, data) {

    if(error) {
        console.log("Error Occurred: " + error);
    } else {
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Song Preview: " + data.tracks.items[3].preview_url);
        console.log("Song Album: " + data.tracks.items[0].album.name);
    }
});
};



// Movie-This
var movieName = function(action){

var movie;
    if (action === undefined) {
        movie = "Mr. Nobody";
    } else {
        movie = action;
    };
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(function(response) {
    
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.Rated)
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
    console.log("Country produced: " + response.data.Country)
    console.log("Language: " + response.data.Language)
    console.log("Plot: " + response.data.Plot)
    console.log("Actors: " + response.data.Actors)
    });
};

// Do-What-It-Says
var doIt = function() {

fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");

});
};





switch(action) {
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
      






