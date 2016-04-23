(function() {

function getFlickrData (response) {
		var flickrData = JSON.parse(this.responseText);
		var flickrPhotoObj = flickrData.photos.photo;
		var timelineWrapper = document.getElementById('timeline');
		var hubbleArr = [];

		for(var i = 0; i < flickrPhotoObj.length; i++){
			var result = flickrPhotoObj[i];
			var urlDefault = 'https://farm' + result.farm + '.staticflickr.com/' + result.server + '/' + result.id + '_' + result.secret + '.jpg';
			var urlLarge = 'https://farm' + result.farm + '.staticflickr.com/' + result.server + '/' + result.id + '_' + result.secret + '_b.jpg';
			var title = result.title;
			var hubbleArr = title.split(" ");
			for(var a = 0; a < hubbleArr.length; a++){
				var result = hubbleArr[a].toLowerCase();
				if(result === 'hubble'){
					timelineWrapper.innerHTML += '<div class="image-wrapper" style="background-image: url(' + urlLarge + ');"</div> <h1>' + title + '</h1></div>'
				}
			}
		}	
	}

	var flickrDataReq = new XMLHttpRequest();
	flickrDataReq.addEventListener("load", getFlickrData);
	flickrDataReq.open("GET", "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1");
	flickrDataReq.send();

})();