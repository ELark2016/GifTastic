
var gifList = [];


$("#submit-button").click(function(event){ 
    event.preventDefault();
    gifDisplay();
    newButton();
    $(".giphy").empty();
    

})
    function gifDisplay () {
    var search = $("#search-term").val().trim();
    gifList.push(search);

    var QueryURL = "http://api.giphy.com/v1/gifs/search";
    QueryURL += '?' + $.param({
    'limit': 10,
    'api_key': "dJBEVywow51er4KCAp9ITnpl31KiCUAy",
    'q': search,
    });

    console.log(QueryURL);
    $.ajax({
        url: QueryURL,
        method: 'GET',
    })
    .then(function(response) {
        // newButton();
        for (var i = 0; i <= response.data.length; i ++){
            var rating = response.data[i].rating;
            var imageUrl = response.data[i].images.original.url; 
            var stillImageUrl = response.data[i].images.original.still;
            var pTag = $("<p>").text("Rating: " + rating);
            pTag.attr("id", "img-rating");
            $(".giphy").append(pTag);
            var image = $("<img>");
            image.addClass("gifImage");
            image.attr("src", imageUrl);
            image.attr("alt", "Image Placeholder");
            image.attr("data-animate", imageUrl);
            image.attr("data-state", "animate");
            image.attr("data-still", stillImageUrl);
            image.attr("data-state", "still");
            $(".giphy").append(image);   
        }
            console.log(response);
            console.log(image);
    })
}
$(".gifImage").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "animate") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

function newButton(){
    $("#img-button").empty();
    for (var i = 0; i < gifList.length; i++) {
        var search = $("#search-term").val().trim();
        var button = $("<button>");
        $("#img-button").append(button);
        $("button").addClass("search-button");
        button.attr("data-name", gifList[i]);
        button.text(gifList[i]);
        $("#img-button").append(button);    
    }   
}




    
    // update so that a new search will present new images 
    // add an ajax call that will retrieve the still images
    // add a function that will "pause" the gif on click