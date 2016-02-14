(function ($) {

	//__ Création du plugin easymap
	$.fn.easymap = function(options) {
		//__ On initialise les variables globales
		var map;
		var selector = this.selector.substring(1);
		var identifiant = this.selector;

		//__ paramètre par défaut du plugin
		var defaults = {
			size : ['100%', '100%'],
			control: {
				zoom: 17,
				center: [19.6247855, -99.3162025],
				disableDefault: false,
				zoomControl: true,
				mapTypeControl: true
			},
			markers: [{
				"latitude": 19.6247855,
				"longitude": -99.3162025,
				"ville":"SAPASNIR",
				"icone": null
			}]
		},
		options = $.extend(defaults, options);

		//__ On applique notre plug-in sur tous les éléments de notre objet jQuery
		this.each(function() {

			//__ on détermine la base de la carte (taille, etc...)
			var cssMap = function() {
				$(identifiant).css({
					width : options.size[0],
					height : options.size[1],
				});
			}

			var baseMap = function() {
				var myLatLng = new google.maps.LatLng(options.control.center[0], options.control.center[1]);
				map = new google.maps.Map(document.getElementById(selector), {
					center: myLatLng,
					zoom: options.control.zoom,
					disableDefaultUI: options.control.disableDefault,
					zoomControl: options.control.zoomControl,
					mapTypeControl: options.control.mapTypeControl
				});
			}

			//__ On ajoute les Markers au fur et à mesure
			var addMarkers = function() {
				var markers = [];

				for (var i = 0; i < options.markers.length; i++) {
					var point = options.markers[i];
					var myLatLngMarker = new google.maps.LatLng(point.latitude, point.longitude);
					var marker = new google.maps.Marker({
						position: myLatLngMarker,
						map: map,
						title: point.ville,
						icon: point.icone
					});

					google.maps.event.addListener(marker, 'click', (function(marker, i) {
						return function() {
							var point = options.markers[i];
							var infowindow = new google.maps.InfoWindow();
							var contentString = '<div><h1>'+point.ville+'</h1></div>';

							if (typeof( window.infoopened ) != 'undefined') infoopened.close();
							infowindow.setContent(contentString);
							infowindow.open(map, marker);
							infoopened = infowindow;
						}
					})(marker, i));
			
					markers.push(marker);
				}
			}

			cssMap();
			baseMap();

			if (options.markers[0].latitude != null && options.markers[0].longitude != null) {
				addMarkers();
			}
		});
	};
})(jQuery);
