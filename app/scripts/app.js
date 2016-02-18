//medium.com style toolTip 

$(function(){

	// create some object to save all pressed keys
	key('shift+command+space', function(){ 
		$('div#siteloader').show(); 
		$('#theAwesomeToolBarThatIsWayCoolYo_backdrop').show();
	});
	key('escape', function(){ 
		$('div#siteloader').hide(); 
		$('#theAwesomeToolBarThatIsWayCoolYo_backdrop').hide();
	});



	var createButton = function(){
		var div2 			= document.createElement('div'); 
		var div3 			= document.createElement('div'); 
		div2.className 		= "__bottom_panel_hoverer__";
		div2.id = "theAwesomeToolBarThatIsWayCoolYo";
		div3.className 		= "__bottom_panel_hoverer__backdrop";
		div3.id = "theAwesomeToolBarThatIsWayCoolYo_backdrop";
		document.body.appendChild(div2);  
		document.body.appendChild(div3);  
	}
	createButton();

	$('.__bottom_panel_hoverer__').attr('ng-app', 'myAppExtension');
	$('.__bottom_panel_hoverer__').append('<div id="siteloader"></div>');

	



	if(window.location.host === "www.youtube.com" || window.location.host === "youtube.com") {
		var locale = window.location.search;
		setInterval(function(){
			if (locale !== window.location.search) {
				locale = window.location.search;
				console.log('the url has changed!')
				var a = window.location.search;
				var b = a.slice(3);
				var image = "//i.ytimg.com/vi/"+b+"/hqdefault.jpg";
				var title = $('title').text(); 
				var description = $('meta[name="description"]').attr('content');
				$('#iframe').remove();
				$('div#siteloader')
				.append('<iframe id="iframe" src="https://gentle-chamber-9551.herokuapp.com/iframe#image='+image+'/?/title='+title+'/?/description='+description+'"></iframe>');
			}
		}, 3000);
		
		
	}
	 if(window.location.host === "soundcloud.com" || window.location.host === "www.soundcloud.com") {
	 	console.log()
		var place = window.location.href;
		var title = $('title').text(); 
		var description = $('meta[property="twitter:player"]').attr('content');
		$('span.sc-artwork.sc-artwork-placeholder-1.image__full').attr('id', 'image');
		var img = document.getElementById('image');
		$('#iframe').remove();
		$('div#siteloader')
			.append('<iframe id="iframe" name="soundcloud" src="https://gentle-chamber-9551.herokuapp.com/iframe#image='+undefined+'/?/title='+title+'/?/description='+description+'"></iframe>');
		setInterval(function(){
			if(place !== window.location.href) {
				place = window.location.href;
				var title = $('title').text(); 
				var description = $('meta[property="twitter:player"]').attr('content');
				$('span.sc-artwork.sc-artwork-placeholder-1.image__full').attr('id', 'image');
				var img = document.getElementById('image');
				$('#iframe').remove();
				$('div#siteloader')
					.append('<iframe id="iframe" name="soundcloud" src="https://gentle-chamber-9551.herokuapp.com/iframe#image='+undefined+'/?/title='+title+'/?/description='+description+'"></iframe>');
			} 
		}, 3000);
		

	}
	if($('meta[property="og:image"]')[0] && $('meta[property="og:image"]').attr('content') != "") {
		var image = $('meta[property="og:image"]').attr('content');
	} else {
		var len = $('body img').length
		for(i = 0; i < len; i++) {
			var images = $('body img')[i]
			console.log(images.img)
		    	if ($(images).width() > 500) {
		        	var image = $('body img')[i]
		        	i = len;
		  	 	} else if ($(images).width() > 400) {
		  	 		var image = $('body img')[i]
		        	i = len;
		  	 	} else if ($(images).width() > 300) {
		  	 		var image = $('body img')[i]
		        	i = len;
		  	 	} else if ($(images).width() > 200) {
		  	 		var image = $('body img')[i]
		        	i = len;
		  	 	}
		} image = $(image).attr('src');
	}

	if (window.location.host !== "soundcloud.com" && window.location.host !== "www.soundcloud.com" && window.location.host === "www.youtube.com" && window.location.host === "youtube.com") {
	var title = $('title').text(); 
	var description = $('meta[name="description"]').attr('content');

	$('.__bottom_panel_hoverer__').append('<div id="siteloader"></div>');

		$('div#siteloader')
		.append('<iframe id="iframe" src="https://gentle-chamber-9551.herokuapp.com/iframe#image='+image+'/?/title='+title+'/?/description='+description+'"></iframe>');
		$('div#siteloader').attr('ng-controller', 'AppCtrl');
		//$('div#siteloader').append('<input id="image" style="display:inline !important;" class="hidden form-control" ng-model="post.image" placeholder="image url">')
	}
	

}());

var addFrame = function(){
	$('div#siteloader')
		.append('<iframe id="iframe" src="https://gentle-chamber-9551.herokuapp.com/iframe#image='+image+'/?/title='+title+'/?/description='+description+'"></iframe>');
	$('div#siteloader').attr('ng-controller', 'AppCtrl');
}
addFrame();
$('#theAwesomeToolBarThatIsWayCoolYo_backdrop').click(function(){
	$('div#siteloader').hide(); 
	$(this).hide();
	console.log('clicked')
});
