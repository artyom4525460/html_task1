var map, marker, circle;
var latLng = {lat: 43.651499, lng: -79.383466};
console.log('map');
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 12,
    disableDefaultUI: true
  });
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: './images/marker.svg'
  });
  circle = new google.maps.Circle({
    strokeWeight: 0,
    fillColor: "#23ACBD",
    fillOpacity: 0.35,
    map: map,
    center: latLng,
    radius: 1000
  });
}