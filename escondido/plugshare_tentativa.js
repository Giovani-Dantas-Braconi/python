// Carrega as bibliotecas do Google Maps e do PlugShare
<script src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_DO_GOOGLE_MAPS"></script>
<script src="https://api.plugshare.com/js/plugshare.js?key=SUA_CHAVE_DO_PLUGSHARE"></script>

// Cria um mapa centrado em São Paulo
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -23.5505, lng: -46.6333},
  zoom: 10
});

// Cria um objeto PlugShare para acessar a API
var plugshare = new PlugShare();

// Define os parâmetros da busca por estações de recarga
var params = {
  latitude: -23.5505,
  longitude: -46.6333,
  distance: 50 // em quilômetros
};

// Faz a busca e adiciona marcadores no mapa para cada estação encontrada
plugshare.search(params, function(data) {
  for (var i = 0; i < data.length; i++) {
    var location = data[i];
    var marker = new google.maps.Marker({
      position: {lat: location.latitude, lng: location.longitude},
      map: map,
      icon: location.icon,
      title: location.name
    });
  }
});
