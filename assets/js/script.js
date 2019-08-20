$("#wiki").on("click", function() {

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&format=json&origin=*",
        method: "GET"
    }).then(function(response) {
        var data = response.query.pages[Object.keys(response.query.pages)[0]].title;
        console.log(data);
    });
    
})

$("#quote").on("click", function() {

    $.ajax({
        url: "https://api.quotable.io/random",
        method: "GET"
    }).then(function(response) {
        var quote = response.content;
        console.log(quote);
        var author = response.author;
        console.log("— " + author);
    })

})