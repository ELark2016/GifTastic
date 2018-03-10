
// $("#submit-button").click(function() {
//     event.preventDefault();
// Build string for query to include desired parameters
var QueryURL = "http://api.giphy.com/v1/gifs/search";
QueryURL += '?' + $.param({
   'limit': 10,
   'api_key': "dJBEVywow51er4KCAp9ITnpl31KiCUAy",
   'q': "tweety bird",
});
// ajax call that will retrieve results from Giphy.com per the parameters in the query url
$.ajax({
  url: QueryURL,
  method: 'GET',
})
// returns the rating and images to the page
.then(function(response) {

    for (var i = 0; i <= response.data.length; i ++){
    var rating = response.data[i].rating;
    var imageUrl = response.data[i].images.original.url; 
    var pTag = $("<p>").text("Rating: " + rating);
    var image = $("<img>");
    image.attr("src", imageUrl);
    image.attr("alt", "Image Placeholder");
    $(".giphy").append(pTag);
    $(".giphy").append(image);
    console.log(response);
    console.log(response.data.url);
    }
    
    })

// })

function newButton(){
    var button = $("<button>Button</button>");
    $("#img-button").append(button);
}







// Add an on click function that will add image to page and create a button for the image
    // add a for loop that will retrieve images up to the specified number
    // add an ajax call that will retrieve the still images
    // add a function that will "pause" the gif on click