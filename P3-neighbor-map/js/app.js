// Global Variables
var map, clientID, clientSecret;

function AppViewModel() {
    var self = this;

    this.searchOption = ko.observable("");
    this.markers = [];

    // 定义函数，向foursquare API查询位置信息，包括：street、city、country等信息，
    // 并在点击小小图钉等时候显示出来。
    this.populateInfoWindow = function(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.setContent('');
            infowindow.marker = marker;
            // Foursquare API Client
            clientID = "MAFEGHOG3CCWFPDQLZFDVZ4I52SBTZH1IAUDSTCGIVLG3UTK";
            clientSecret =
                "SU0IVSZEPOJGDK1VKOY1524VHR2UYKFYF5OBYJPTOH0J3SWF";
            // URL for Foursquare API
            var apiUrl = 'https://api.foursquare.com/v2/venues/search?ll=' +
                marker.lat + ',' + marker.lng + '&client_id=' + clientID +
                '&client_secret=' + clientSecret + '&query=' + marker.title +
                '&v=20170708' + '&m=foursquare';
            // Foursquare API
            $.getJSON(apiUrl).done(function(marker) {
                var response = marker.response.venues[0];
                self.street = response.location.formattedAddress[0];
                self.city = response.location.formattedAddress[1];
                self.country = response.location.formattedAddress[3];
                self.category = response.categories[0].shortName;
                //self.photo = response.photos[1].photourl;

                self.htmlContentFoursquare =
                    '<h5 class="iw_subtitle">(' + self.category + ')</h5>' +
                    '<div>' +

                    //'<img src= self.photo>' +
                    '<h6 class="iw_address_title"> Address: </h6>' +
                    '<p class="iw_address">' + self.street + '</p>' +
                    '<p class="iw_address">' + self.city + '</p>' +
                    '<p class="iw_address">' + self.country + '</p>' +
                    '</div>';

                infowindow.setContent(self.htmlContent + self.htmlContentFoursquare);
            }).fail(function() {
                // 错误提示
                alert(
                    "Foursquare API开小差，刷新后重试"
                );
            });

            this.htmlContent = '<div>' + '<h4 class="iw_title">' + marker.title +
                '</h4>';

            infowindow.open(map, marker);

            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }
    };

    this.populateAndBounceMarker = function() {
        self.populateInfoWindow(this, self.largeInfoWindow);
        this.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout((function() {
            this.setAnimation(null);
        }).bind(this), 1400);
    };

    //map初始化
    this.initMap = function() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            //地图中心点
            center: new google.maps.LatLng(39.944201, 116.381763),
            //地图缩放比例，数字越大，缩放比越大
            zoom: 12,
            styles: styles
        };
        map = new google.maps.Map(mapCanvas, mapOptions);

        // 设置 InfoWindow
        this.largeInfoWindow = new google.maps.InfoWindow();
        for (var i = 0; i < myLocations.length; i++) {
            this.markerTitle = myLocations[i].title;
            this.markerLat = myLocations[i].lat;
            this.markerLng = myLocations[i].lng;
            // Google Maps marker setup
            this.marker = new google.maps.Marker({
                map: map,
                position: {
                    lat: this.markerLat,
                    lng: this.markerLng
                },
                title: this.markerTitle,
                lat: this.markerLat,
                lng: this.markerLng,
                id: i,
                animation: google.maps.Animation.DROP
            });
            this.marker.setMap(map);
            this.markers.push(this.marker);
            this.marker.addListener('click', self.populateAndBounceMarker);
        }
    };

    this.initMap();

    // This block appends our locations to a list using data-bind
    // It also serves to make the filter work
    this.myLocationsFilter = ko.computed(function() {
        var result = [];
        for (var i = 0; i < this.markers.length; i++) {
            var markerLocation = this.markers[i];
            if (markerLocation.title.toLowerCase().includes(this.searchOption()
                    .toLowerCase())) {
                result.push(markerLocation);
                this.markers[i].setVisible(true);
            } else {
                this.markers[i].setVisible(false);
            }
        }
        return result;
    }, this);
}

googleError = function googleError() {
    //错误提示
    alert(
        'Google地图没有正确加载，请刷新网页重试!'
    );
};

function startApp() {
    ko.applyBindings(new AppViewModel());
}
