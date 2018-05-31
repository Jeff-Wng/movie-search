var http = "https://api.themoviedb.org/3";
var movieSearch = "/search/movie";
var tvSearch = "/search/tv";
var apiKey = config.API_KEY;
var query = "&query=";

var id = 0;

var popular = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
var topRated = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1";
var mostRated = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1";
var newest = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1";
var revenue = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1";

const loadJson = (movieUrl) => {
    $.getJSON(movieUrl, function(data) {
        var img = "<li><img class='poster' src='https://image.tmdb.org/t/p/w500" + data["poster_path"] + "' alt='poster'>";
        var info = "<div class='info'>";
        var title = "<p class='title'>" + data.title + "<span> (Movie)</span></p>";
        var tagline = "<p class='tagline'>" + data.tagline + "</p>";
        var overview = "<p class='overview'>" + data.overview + "</p>";
        var release = "<p class='smallInfo'><strong>Released: </strong>" + data["release_date"] + "</p>";
        var runtime = "<p class='smallInfo'><strong>Runtime: </strong>" + data.runtime + " minutes</p>";
        var genre = "<p class='smallInfo'><strong>Genre: </strong>" + data.genres[0]["name"] + "</p>";
        var ratings = "<p class='smallInfo'><strong>Rating: </strong>" + data["vote_average"] + "</p>";
        var count = "<p class='smallInfo'><strong>Reviews: </strong>" + data["vote_count"].toLocaleString('en-US') + "</p>";
        var popularity = "<p class='smallInfo'><strong> Popularity Rating: </strong>" + Math.round(data.popularity) + "</p>";
        var rev = "<p class='smallInfo'><strong>Box Office: </strong>$" + data.revenue.toLocaleString('en-US') + "</p>";
        var imdb = "<a class='imdb' href='http://www.imdb.com/title/" + data["imdb_id"] + "'><img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/128/IMDb-icon.png' alt='imdb_icon'></a></div></li>";

        var appendHTML = img + info + title + tagline + overview + genre + release + runtime + ratings + count + popularity + rev + imdb;
        $("#results").append(appendHTML);
    });
}

$("#popular").click(function() {

    $("#results").empty();
    specificMovieSearch = "/movie/";

    $.getJSON(popular, function(data) {
        for(var i = 0; i < 100; i++) {
            specificMovieSearch = "/movie/";
            specificMovieSearch += data.results[i]["id"];
            movieUrl = http + specificMovieSearch + apiKey;

            loadJson(movieUrl);
        }
    });
});

$("#topRated").click(function() {

    $("#results").empty();
    specificMovieSearch = "/movie/";

    $.getJSON(topRated, function(data) {
        for(var i = 0; i < 100; i++) {
            specificMovieSearch = "/movie/";
            specificMovieSearch += data.results[i]["id"];
            movieUrl = http + specificMovieSearch + apiKey;
            
            loadJson(movieUrl);
        }
    });
});

$("#mostRated").click(function() {

    $("#results").empty();
    specificMovieSearch = "/movie/";

    $.getJSON(mostRated, function(data) {
        for(var i = 0; i < 100; i++) {
            specificMovieSearch = "/movie/";
            specificMovieSearch += data.results[i]["id"];
            movieUrl = http + specificMovieSearch + apiKey;

            loadJson(movieUrl);
        }
    });
});

$("#newest").click(function() {

    $("#results").empty();
    specificMovieSearch = "/movie/";

    $.getJSON(newest, function(data) {
        for(var i = 0; i < 100; i++) {
            specificMovieSearch = "/movie/";
            specificMovieSearch += data.results[i]["id"];
            movieUrl = http + specificMovieSearch + apiKey;

            loadJson(movieUrl);
        }
    });
});

$("#revenue").click(function() {

    $("#results").empty();
    specificMovieSearch = "/movie/";

    $.getJSON(revenue, function(data) {
        for(var i = 0; i < 100; i++) {
            specificMovieSearch = "/movie/";
            specificMovieSearch += data.results[i]["id"];
            movieUrl = http + specificMovieSearch + apiKey;

            loadJson(movieUrl);
        }
    });
});

const search = () => {
   // resets query after every search
   query = "&query=";
   specificMovieSearch = "/movie/";
   specificTVSearch = "/TV/";

   $("#results").empty();
   // replaces all spaces with '+'
   var search = $("input[type='text']").val().replace(/ /g, "+");
   $(this).val("");
   // add search term to query string
   query += "'" + search + "'";
   // construct full json url for movie search
   var movieUrl = http + movieSearch + apiKey + query;
   // construct full json url for tv search
   var tvUrl = http + tvSearch + apiKey + query;

   // get movie search results
   $.getJSON(movieUrl, function(data) {
       for(var i = 0; i < 100; i++) {
           specificMovieSearch = "/movie/";
           specificMovieSearch += data.results[i]["id"];
           movieUrl = http + specificMovieSearch + apiKey;

           $.getJSON(movieUrl, function(data) {
               var img = "<li><img class='poster' src='https://image.tmdb.org/t/p/w500" + data["poster_path"] + "' alt='poster'>";
               var info = "<div class='info'>";
               var title = "<p class='title'>" + data.title + "<span> (Movie)</span></p>";
               var tagline = "<p class='tagline'>" + data.tagline + "</p>";
               var overview = "<p class='overview'>" + data.overview + "</p>";
               var release = "<p class='smallInfo'><strong>Released: </strong>" + data["release_date"] + "</p>";
               var runtime = "<p class='smallInfo'><strong>Runtime: </strong>" + data.runtime + " minutes</p>";
               var genre = "<p class='smallInfo'><strong>Genre: </strong>" + data.genres[0]["name"] + "</p>";
               var ratings = "<p class='smallInfo'><strong>Rating: </strong>" + data["vote_average"] + "</p>";
               var count = "<p class='smallInfo'><strong>Reviews: </strong>" + data["vote_count"].toLocaleString('en-US') + "</p>";
               var rev = "<p class='smallInfo'><strong>Box Office: </strong>$" + data.revenue.toLocaleString('en-US') + "</p>";
               var imdb = "<a class='imdb' href='https://www.imdb.com/title/" + data["imdb_id"] + "'><img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/128/IMDb-icon.png' alt='imdb_icon'></a></div></li>";

               var appendHTML = img + info + title + tagline + overview + genre + release + runtime + ratings + count + rev + imdb;
               $("#results").append(appendHTML);
           });
       }
   });

   // get tv search results
   $.getJSON(tvUrl, function(data) {
       for(var i = 0; i < 100; i++) {
           specificTVSearch = "/tv/";
           specificTVSearch += data.results[i]["id"];
           tvUrl = http + specificTVSearch + apiKey;

           $.getJSON(tvUrl, function(data) {
               var img = "<li><img class='poster' src='https://image.tmdb.org/t/p/w500" + data["poster_path"] + "' alt='poster'>";
               var info = "<div class='info'>";
               var title = "<p class='title'>" + data.name + "<span> (TV Show)</span></p>";
               var tagline = "<p class='tagline'>" + data.networks[0]["name"] + "</p>";
               var overview = "<p class='overview'>" + data.overview + "</p>";
               var genre = "<p class='smallInfo'><strong>Genre: </strong>" + data.genres[0]["name"] + "</p>";
               var release = "<p class='smallInfo'><strong>Released: </strong>" + data["first_air_date"] + "</p>";
               var runtime = "<p class='smallInfo'><strong>Runtime: </strong>" + data["episode_run_time"] + " minutes</p>";
               var ratings = "<p class='smallInfo'><strong>Rating: </strong>" + data["vote_average"] + "</p>";
               var count = "<p class='smallInfo'><strong>Reviews: </strong>" + data["vote_count"].toLocaleString('en-US') + "</p>";
               var episodes = "<p class='smallInfo'><strong>Seasons: </strong>" + data["number_of_seasons"] + "<strong> Episodes: </strong>" + data["number_of_episodes"] + "</p></div></li>";

               var appendHTML = img + info + title + overview + genre + release + runtime  + ratings + count +episodes;
               $("#results").append(appendHTML);
           });
       }
   });
}

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        search();
    };
});

$("#submitBtn").click(function() {
    search();
});
