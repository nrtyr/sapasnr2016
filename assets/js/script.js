(function($) {
	$("#map-1").easymap();

	$("#map-2").easymap({
			size : ['100%', '100%'],
			control: {
				zoom: 17,
				center: [19.621136, -99.310075],
				disableDefault: false,
				zoomControl: true,
				mapTypeControl: true
			},
			markers: [{
				"latitude": 19.621136,
				"longitude": -99.310075,
				"ville":"SAPASNIR",
				"icone": null
			}]
	});

	$("#map-3").easymap({
			size : ['100%', '100%'],
			control: {
				zoom: 15,
				center: [19.6266239, -99.2922906],
				disableDefault: false,
				zoomControl: true,
				mapTypeControl: true
			},
			markers: [{
				"latitude": 19.6266239,
				"longitude": -99.2922906,
				"ville":"SAPASNIR",
				"icone": null
			}]
	});
})(jQuery);
