$(document).ready(function() {
    var streetStr = $('#street').val();
    var cityStr = $('#cityStr').val();
    var address = streetStr + ',' + cityStr;


    $('#submit-btn').on('click', function(event) {
        event.preventDefault();
        // google streetview request
        var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?' +
        'size=600x300&location=' + 'address' + '&fov=90&heading=235&pitch=10' +
        '&key=AIzaSyAaNLjqQM9p_dnjB34s7A2vkd55cdOpAIM';
        $('html').append('<img class="bgimg" src= "'+ streetviewUrl +'">');

        // newyorkTimes request
        var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
        cityStr +'&page=2&sort=oldest&api-key=98a21b56544f4564adcf9e8b196c2012';

        $.getJSON(nytimesUrl, function(data) {
            $('#nytimes-header').text('New York Times Articles About' + cityStr);

            articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                $('#nytimes-articles').append('<li class="article">' +
                    '<a href="'+article.web_url+'">' + article.headline.main + '</a>'+
                    '<p>' + article.snippet + '</p>' +
                    '</li>');
            }
        }).fail(function() {
            $('#nytimes-header').text( "NewYorkTimes could not be loaded!" );
        });

        // wikilinks request





    });

});
