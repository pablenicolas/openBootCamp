map;
let markers = [];

function initMap() {
  const posicion = {
    lat: -38.009371388264974, 
    lng: -57.56373953604991
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -38.009371388264974,
        lng: -57.56373953604991
      },
      map,
      title: "Mar del Plata",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -34.90998930823367, 
        lng: -56.160459764911565
      },
      map,
      title: "Montevideo",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -32.79955676284224, 
        lng: -70.80613827475626
      },
      map,
      title: "Santiago de Chile",
    })
  );
}
