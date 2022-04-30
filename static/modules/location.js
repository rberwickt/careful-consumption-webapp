import google from 'google';
export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var accuracy = position.coords.accuracy;
            var coords = new google.maps.LatLng(latitude, longitude);

            if (DEBUG) console.log(coords);

            geocoder.geocode(
                {
                    'location': coords
                }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            $("#address").val(results[1].formatted_address);
                            addressSearch();
                        }
                    }
                });

        }, function error(msg) {
            alert('Please enable your GPS position feature.');
        }, {
            enableHighAccuracy: true
        });
    }
    else {
        alert("This feature is not available.")
    }
    const latlng = { latitude, longitude };
    (geocoder.geocode({ location: latlng }).then(console.log(response.results[0])));
}