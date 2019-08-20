$("#wiki").on("click", function() {

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&format=json&origin=*",
        method: "GET"
    }).then(function(response) {
        var data = response.query.pages[Object.keys(response.query.pages)[0]];
        console.log(data);
        // var key = data[Object.keys(data)[0]];
        // console.log(key);
    });
    
})