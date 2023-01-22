function initMap() {
    const uluru = { lat: 52.65021496053638, lng: -7.25136715996576 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: uluru,
        // mapTypeId: "hybrid",
        styles: [
            {
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#212121"
                   }
                 ]
               },
               {
                 "elementType": "labels.icon",
                 "stylers": [
                   {
                     "visibility": "on"
                   }
                 ]
               },
               {
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#757575"
                   }
                 ]
               },
               {
                 "elementType": "labels.text.stroke",
                 "stylers": [
                   {
                     "color": "#212121"
                   }
                 ]
               },
               {
                 "featureType": "administrative",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#757575"
                   }
                 ]
               },
               {
                 "featureType": "administrative.country",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#9e9e9e"
                   }
                 ]
               },
               {
                 "featureType": "administrative.land_parcel",
                 "stylers": [
                   {
                     "visibility": "on"
                   }
                 ]
               },
               {
                 "featureType": "administrative.locality",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#bdbdbd"
                   }
                 ]
               },
               {
                 "featureType": "poi",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#757575"
                   }
                 ]
               },
               {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#181818"
                   }
                 ]
               },
               {
                 "featureType": "poi.park",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#616161"
                   }
                 ]
               },
               {
                 "featureType": "poi.park",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                   {
                     "color": "#1b1b1b"
                   }
                 ]
               },
               {
                 "featureType": "road",
                 "elementType": "geometry.fill",
                 "stylers": [
                   {
                     "color": "#2c2c2c"
                   }
                 ]
               },
               {
                 "featureType": "road",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#8a8a8a"
                   }
                 ]
               },
               {
                 "featureType": "road.arterial",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#373737"
                   }
                 ]
               },
               {
                 "featureType": "road.highway",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#3c3c3c"
                   }
                 ]
               },
               {
                 "featureType": "road.highway.controlled_access",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#4e4e4e"
                   }
                 ]
               },
               {
                 "featureType": "road.local",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#616161"
                   }
                 ]
               },
               {
                 "featureType": "transit",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#757575"
                   }
                 ]
               },
               {
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [
                   {
                     "color": "#000000"
                   }
                 ]
               },
               {
                 "featureType": "water",
                 "elementType": "labels.text.fill",
                 "stylers": [
                   {
                     "color": "#3d3d3d"
                   }
                 ]
               }
             ]
    });
    
    const img = './img/map.png';
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: img,
        opacity: 1,
        width: '12px',
    });
}

window.initMap = initMap;