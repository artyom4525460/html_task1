var map, marker, circle;
var latLng = {lat: 43.70, lng: -79.40};
console.log('map');
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 12,
    disableDefaultUI: true,
    scaledSize: new google.maps.Size(10, 10),
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  });
  marker = new google.maps.Marker({
    position: {lat: 43.71, lng: -79.40},
    map: map,
    icon: './images/marker.png',
  });
  marker1 = new google.maps.Marker({
    position: {lat: 43.70, lng: -79.46},
    map: map,
    icon: './images/marker1.png',
  });
  marker2 = new google.maps.Marker({
    position: {lat: 43.72, lng: -79.34},
    map: map,
    icon: './images/marker2.png',
  });
  marker3 = new google.maps.Marker({
    position: {lat: 43.68, lng: -79.34},
    map: map,
    icon: './images/marker3.png',
  });
  marker4 = new google.maps.Marker({
    position: {lat: 43.675, lng: -79.41},
    map: map,
    icon: './images/marker4.png',
  });
  marker5 = new google.maps.Marker({
    position: {lat: 43.66, lng: -79.31},
    map: map,
    icon: './images/marker5.png',
  });
  marker6 = new google.maps.Marker({
    position: {lat: 43.655, lng: -79.475},
    map: map,
    icon: './images/marker6.png',
  });
}