(function($){
	
	'use strict';

	$(document).ready(function(e) {
			
		//MARKER SETTINGS
	
		//Marker Size
		var sliderVal = $("#resizable-marker").val();
		
		var sliderOpts = {
			min:24,
			max: 81,
			value: sliderVal != 25 ? sliderVal : 25,
			slide: function() {
		
				var value = $("#markerSlider").slider("value");
		
				$("#resizable-marker").val(value);
			}
		};

		$("#markerSlider").slider(sliderOpts);
		
		//Font Size
		var sliderFontVal = $("#marker-font-size").val();
				
		var sliderFontOpts = {
			min:11,
			max: 46,
			value: sliderFontVal != 12 ? sliderFontVal : 12,
			slide: function() {
		
				var value = $("#markerFontSlider").slider("value");
		
				$("#marker-font-size").val(value);
			}
		};

		$("#markerFontSlider").slider(sliderFontOpts);
		
		
		//Marker Y Position
		var markerYVal = $("#marker-y-position").val();
		
		var markerYOpts = {
			min:0,
			max: 61,
			value: markerYVal != 0 ? markerYVal : 0,
			slide: function() {
		
				var value = $("#markerYPosition").slider("value");
		
				$("#marker-y-position").val(value);
			}
		};

		$("#markerYPosition").slider(markerYOpts);
		
		//check selection of marker type list for image activation
		if( $('#marker-type').val() == 'icon' ){
			$('.marker_icon').fadeIn('fast');
		};
		
		$('#marker-type').change(function(e) {
            
			var $this = $(this);
			if( $this.val() == 'icon' ){
				$('.marker_icon').fadeIn('fast');
				
			} else {
				$('.marker_icon').fadeOut('fast');
				
			}
			
        });
		
		//PANEL SETTINGS
		
		//Panel Border Radius
		var panelBorderRadius = $("#panel-border-radius").val();
		
		var panelBorderRadiusOpts = {
			min:0,
			max: 99,
			value: panelBorderRadius != 0 ? panelBorderRadius : 0,
			slide: function() {
		
				var value = $("#panelBorderRadius").slider("value");
		
				$("#panel-border-radius").val(value);
			}
		};

		$("#panelBorderRadius").slider(panelBorderRadiusOpts);
		
		//Panel Title Font Size
		var panelTitleFontSize = $("#panel-title-fontsize").val();
		
		var panelTitleFontSizeOpts = {
			min:11,
			max: 26,
			value: panelTitleFontSize != 12 ? panelTitleFontSize : 12,
			slide: function() {
		
				var value = $("#panelFontSize").slider("value");
		
				$("#panel-title-fontsize").val(value);
			}
		};

		$("#panelFontSize").slider(panelTitleFontSizeOpts);
		
		//Panel title Y Position
		var panelTitleYPosition = $("#panel-title-yPosition").val();
		
		var panelTitleYPositionOpts = {
			min:0,
			max: 61,
			value: panelTitleYPosition != 0 ? panelTitleYPosition : 0,
			slide: function() {
		
				var value = $("#panelTitleYPos").slider("value");
		
				$("#panel-title-yPosition").val(value);
			}
		};

		$("#panelTitleYPos").slider(panelTitleYPositionOpts);
		
		//Panel Height
		var panelHeight = $("#panel-height").val();
		
		var panelHeightOpts = {
			min:230,
			max: 1500,
			value: panelHeight != 230 ? panelHeight : 230,
			slide: function() {
		
				var value = $("#panelHeight").slider("value");
		
				$("#panel-height").val(value);
			}
		};

		$("#panelHeight").slider(panelHeightOpts);
		
		
		//TOOLTIP SETTINGS
		
		//Tip Border Radius
		var tipBorderRadius = $("#tooltip-border-radius").val();
		
		var tipBorderRadiusOpts = {
			min:0,
			max: 99,
			value: tipBorderRadius != 0 ? tipBorderRadius : 0,
			slide: function() {
		
				var value = $("#tipBorderRadius").slider("value");
		
				$("#tooltip-border-radius").val(value);
			}
		};

		$("#tipBorderRadius").slider(tipBorderRadiusOpts);
		
		//RESPONSIVE SETTINGS
		var videoHeight = $("#video-height").val();
		var videoHeightOpts = {
			min:200,
			max: 500,
			value: videoHeight != 0 ? videoHeight : 0,
			slide: function() {
		
				var value = $("#videoHeight").slider("value");
		
				$("#video-height").val(value);
			}
		};
		$("#videoHeight").slider(videoHeightOpts);
		
		var markerResponsiveSize = $("#marker-responsive-size").val();
		var markerResponsiveSizeOpts = {
			min:10,
			max: 50,
			value: markerResponsiveSize != 10 ? markerResponsiveSize : 10,
			slide: function() {
		
				var value = $("#markerResponsiveSize").slider("value");
		
				$("#marker-responsive-size").val(value);
			}
		};
		$("#markerResponsiveSize").slider(markerResponsiveSizeOpts);
		
		var markerResponsiveFontSize = $("#marker-responsive-font-size").val();
		var markerResponsiveFontSizeOpts = {
			min:5,
			max: 20,
			value: markerResponsiveFontSize != 5 ? markerResponsiveFontSize : 5,
			slide: function() {
		
				var value = $("#markerResponsiveFontSize").slider("value");
		
				$("#marker-responsive-font-size").val(value);
			}
		};
		$("#markerResponsiveFontSize").slider(markerResponsiveFontSizeOpts);
			 
			 		 
		//Color Selectors
		$("#marker-color, #marker-hover-color, #marker-active-color, #panel-bg-color, #marker-font-color, #panel-title-color, #panel-text-color").spectrum();
		$("#marker-color, #marker-hover-color, #marker-active-color, #panel-bg-color, #marker-font-color, #panel-title-color, #panel-text-color").show();
		
		$("#tooltip-bg, #tooltip-border-color, #tooltip-font-color").spectrum();
		$("#tooltip-bg, #tooltip-border-color, #tooltip-font-color").show();
		
		$("#google-map-btn-color, #google-map-btn-text-color").spectrum();
		$("#google-map-btn-color, #google-map-btn-text-color").show();
				
		
		//Toggle Panel Layout Options
		$('#pm-panel-layout label').click(function() {
			var $this = $(this);
			//var att = $this.attr('for');
			//var radioBtn = '#' + att;
			//$(radioBtn).prop("checked", true);
			$this.addClass('pm-input-selected').siblings().removeClass('pm-input-selected');
		});
		
		//check the status of Auto Resize
		var checkedValue = $('#pm-panel-layout input[type="radio"]:checked').val();
			
		if(checkedValue == 'pm-lo-1' || checkedValue == 'pm-lo-2'){
			$('#pm-panel-auto-resize').fadeIn('fast');
		};
		if(checkedValue == 'pm-lo-4' || checkedValue == 'pm-lo-5'){
			$('.panel_shortcode_support').fadeOut('fast');
		};
		
		//check responsiveness
		var responsiveValue = $('.floorplan_responsiveness input[type="checkbox"]:checked').val();
		
		if(responsiveValue == 1){
			//$('#pm-panel-layout').hide('fast');
			
			//Display responsive panels only (disable and responsive)
			$('#pm-lo-1-label').hide();
			$('#pm-lo-2-label').hide();
			$('#pm-lo-3-label').hide();
			$('#pm-lo-4-label').hide();
			$('#pm-lo-6-label').show();
			
			$('#pm-panel-auto-resize').hide('fast');
			$('.panel_height').hide('fast');
			$('#responsive_settings').fadeIn('fast');
		};
		
		$('.floorplan_responsiveness input[type="checkbox"]').change(function(e) {
			var $this = $(this);
			if($this.is(':checked')) {
				//$('#pm-panel-layout').hide('fast');
				
				//Display responsive panels only (disable and responsive)
				$('#pm-lo-1-label').hide();
				$('#pm-lo-2-label').hide();
				$('#pm-lo-3-label').hide();
				$('#pm-lo-4-label').hide();
				$('#pm-lo-6-label').show();
				
				$('#pm-panel-auto-resize').hide('fast');
				$('.panel_height').hide('fast');
				$('#responsive_settings').fadeIn('fast');
			} else {
				//$('#pm-panel-layout').fadeIn('fast');
				
				//Display fixed width panels only
				$('#pm-lo-1-label').show();
				$('#pm-lo-2-label').show();
				$('#pm-lo-3-label').show();
				$('#pm-lo-4-label').show();
				$('#pm-lo-6-label').hide();
				
				$('#pm-panel-auto-resize').fadeIn('fast');
				$('.panel_height').fadeIn('fast');
				$('#responsive_settings').fadeOut('fast');
			}
		});
		
		//check Auto Resize selection
		$('#pm-panel-layout input[type="radio"]').change(function(e) {
			
            var $this = $(this);
			var id = $this.attr('id');
			
			if(id == 'pm-lo-1' || id == 'pm-lo-2'){
				$('#pm-panel-auto-resize').fadeIn('fast');
				$('.panel_shortcode_support').fadeIn('fast');
			}
			if(id == 'pm-lo-3'){
				$('#pm-panel-auto-resize').fadeOut('fast');
				$('.panel_shortcode_support').fadeIn('fast');
			}
			if(id == 'pm-lo-4' || id == 'pm-lo-5'){
				$('#pm-panel-auto-resize').fadeOut('fast');
				$('.panel_shortcode_support').fadeOut('fast');
			}
			if(id == 'pm-lo-6'){
				$('.panel_shortcode_support').fadeIn('fast');
			}
			
			
        });
		
		//Google Maps settings
		var googleMapHeight = $("#google-map-height").val();
		var googleMapHeightOpts = {
			min:150,
			max: 600,
			value: googleMapHeight != 150 ? googleMapHeight : 150,
			slide: function() {
		
				var value = $("#googleMapHeight").slider("value");
		
				$("#google-map-height").val(value);
			}
		};
		$("#googleMapHeight").slider(googleMapHeightOpts);
		
		var googleMapZoomLevel = $("#google-map-zoom-level").val();
		var googleMapZoomLevelOpts = {
			min:1,
			max: 20,
			value: googleMapZoomLevel != 1 ? googleMapZoomLevel : 1,
			slide: function() {
		
				var value = $("#googleMapZoomLevel").slider("value");
		
				$("#google-map-zoom-level").val(value);
			}
		};
		$("#googleMapZoomLevel").slider(googleMapZoomLevelOpts);
		
		
	});
	
})(jQuery);