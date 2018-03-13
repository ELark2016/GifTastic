
var gifList = [];

// $(document).on("click", "#submit-button", displayMovieInfo);

$("#submit-button").click(function(event){ 
    event.preventDefault();

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
        newButton();
        for (var i = 0; i <= response.data.length; i ++){
            var rating = response.data[i].rating;
            var imageUrl = response.data[i].images.original.url; 
            var pTag = $("<p>").text("Rating: " + rating);
            pTag.attr("id", "img-rating");
            $(".giphy").append(pTag);
            var image = $("<img>");
            image.attr("src", imageUrl);
            image.attr("alt", "Image Placeholder");
            $(".giphy").append(image);
           
            console.log(response);
            console.log(imageUrl);
        }
    })
})

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
function clearButton(){
    // $('#search-button').removeAttr('value');
    $('#search-term').removeAttr('value');
}


    
    // update so that a new search will present new images and keep prior buttons; maybe empty/clear search 
    // add an ajax call that will retrieve the still images
    // add a function that will "pause" the gif on click