# movie-search
An app that allows user to search up their favorite movies and tv shows

  The app uses the The Movie Database (TMD) API. After the user types the movie or TV show they want to seach they can press the submit button
or hit the enter key. When either of this is done, the app looks through the API for related results. The API requires more specific query params
to reach the more in depth info on a movie or show. By looping through all of the related results, their ID is stored in an array. The array is
then looped through and the API is called again, this time with the specific ID of the movie or show. This allows the API to return more info on the
related searches.

  On the top, there are specific links that displays the movies and shows in a sorted manner, by most popular, top rated, etc. This is done
the same way as the search function, but uses specifc API calls provided by The Movie Database.

  The results also comes with an accompanying IMDB link to provide more information. 
  
  The app can be used at [here](https://jwong421.github.io/movie-search)
