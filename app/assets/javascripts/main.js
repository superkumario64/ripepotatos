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
var apiUrl = "http://api.themoviedb.org/3/search/movie?api_key=81c50c197b83129dd4fc387ca6c8c323&limit=4&query=kumar";
var moviesLoaded = false;
//for(var i = 0; i<searchTerms.length; i++){
  $.ajax({
    dataType: "json",
    url: apiUrl,
    data: {},
    success: function (data) {
      app.movies.push(data);
      console.log(data);
      //if (app.movies.length == searchTerms.length) app.moviesLoaded();
    }
  });
//}
