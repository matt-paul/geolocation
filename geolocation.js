var field = document.getElementById("myDataField");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, handleError);
  } else {
    field.innerHTML = "Browser does not support GeoLocation";
  }
}

function handleError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User distrusts app");
      break;
      case error.POSITION_UNAVAILABLE:
      alert("Location information missing.");
      break;
      case error.TIMEOUT:
      alert( "Timeout occurred." );
      break;
      case error.UNKNOWN_ERROR:
      alert("Unknown error took place");
      break; }
      alert("Developer error string: " + error.message);
}

function showPosition(position) {
  field.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords);
}

getLocation();
