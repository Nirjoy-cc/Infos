function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 22.32725681252076 , lng: 91.82520255855782};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'West Madarbari, Chattogram,Bangladesh' // Title Location
    });
}