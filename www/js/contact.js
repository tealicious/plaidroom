window.onload = function () {
    var styles = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"hue":"#f58092"},{"saturation":100},{"lightness":10}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#23b1eb"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#23b1eb"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#23b1eb"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"color":"#23b1eb"},{"hue":"#000000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"hue":"#23b1eb"},{"saturation":0},{"lightness":0}]}];
    var options = {
    mapTypeControlOptions: {
        mapTypeIds: []
    },
        center: new google.maps.LatLng(39.267587, -84.258957),
        zoom: 18,
        disableDefaultUI: false, 
        mapTypeId: 'Styled'
    };
	

    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
	map.setOptions({draggable: false});
	
	var myLatlng = new google.maps.LatLng(39.267587, -84.258957);
	
	var contentString = '<div id="content" class="poi-info-window">'+
      '<div id="siteNotice" >'+
      '</div>'+
      '<h1 id="firstHeading" class="title"><a target="_blank" href="https://www.google.com/maps/place/Plaid+Room+Records/@39.267587,-84.258957,19z/data=!4m2!3m1!1s0x0:0x73bfbf1808ccd3c5?hl=en-US">Plaid Room Records</a></h1>'+
      '<div id="bodyContent">'+
      '<p></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
	var marker = new google.maps.Marker({
    position: myLatlng,
	map: map,
	icon: 'http://i.imgur.com/qMyqvtP.png',
    title:"Plaid Room"
});
	 marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
	marker.setMap(map);
};