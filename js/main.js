
$('#search-button').click(function() {
    document.getElementById('results').innerHTML = '';
    
    var userSearch = $('#search')[0].value.split(' ').join('+');
    var searchGif = $.get(`http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=kTuRjFgR28oJSQTN9KkJfknw0Ho9qP4m&limit=15`);

    searchGif.done(
        function (data) {
            for (i = 0; i < data.data.length; i++) {
                console.log('this was successful, you got', data);
                // let img = document.createElement('img');
                // img.src = data.data[i].images.original.url;
                // document.body.appendChild(img)
                document.getElementById('results').innerHTML += `<img src='${data.data[i].images.original.url}' alt='picture-of-${[i]}' width='300' class='p-3'>`
            }

        }
    );
})





