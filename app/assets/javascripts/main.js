var apiUrl = "http://api.themoviedb.org/3/search/movie?api_key=81c50c197b83129dd4fc387ca6c8c323&limit=4&query=kumar";
var movieListTemplate = '<form accept-charset="UTF-8" action="/movies/{{movie_id}}" method="get"><input id="title" name="title" type="hidden" value="{{movie_title}}" /><label><h4 id="list_title">{{movie_list_item}}</h4></label><input type="submit" class="btn btn-primary" value="See Reviews" /></form>';
var templateRender = "";
var movieData = "";
$.ajax({
  dataType: "json",
  url: apiUrl,
  data: {},
  success: function (data) {
    movieData = data;
    renderTemplate(movieData);
  }
});

function renderTemplate(data){
  $("#movies_list").html("");
  for (var i=0; i< data.results.length; i++){
    templateRender = movieListTemplate.replace("{{movie_id}}", data.results[i].id);
    templateRender = templateRender.replace("{{movie_title}}", data.results[i].original_title);
    var list_item = data.results[i].original_title +" - "+ data.results[i].release_date +" - "+ data.results[i].genre_ids[0];
    templateRender = templateRender.replace("{{movie_list_item}}", list_item);
    $("#movies_list").append(templateRender);
  }
}

function sortByTitle(a,b){
  var aTitle = a.original_title.toLowerCase();
  var bTitle = b.original_title.toLowerCase();
  return ((aTitle < bTitle) ? -1 : ((aTitle > bTitle) ? 1 : 0));
}

function sortByDate(a,b){
  return new Date(b.release_date) - new Date(a.release_date);
}
function sortByGenre(a,b){
  return a.genre_ids[0] - b.genre_ids[0];
}


var doc = $(document);

doc.on("click",".sort-by", function(e){
  if (this.id == "title"){
    movieData.results.sort(sortByTitle);
  } else if (this.id == "date") {
    movieData.results.sort(sortByDate);
  } else if (this.id == "genre") {
    movieData.results.sort(sortByGenre);
  }
  renderTemplate(movieData);
});
