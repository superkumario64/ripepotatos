var Ripepotatos = function() {
  this.movies = [];
}

Ripepotatos.prototype.addMovie = function (movie) {
  this.movies.push(movie)
};

Ripepotatos.prototype.moviesLoaded = function (){
  console.log(this.movies);
}

var app = new Ripepotatos;
var searchTerms = ["george","peter","sabra", "villa", "kumar"];
var apiUrl = "http://www.omdbapi.com/?t=";
var moviesLoaded = false;
for(var i = 0; i<searchTerms.length; i++){
  $.ajax({
    dataType: "json",
    url: apiUrl+searchTerms[i],
    data: {},
    success: function (data) {
      app.movies.push(data);
      if (app.movies.length == searchTerms.length) app.moviesLoaded();
    }
  });
}
