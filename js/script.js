<script>
	var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'DoggoInfobox.jpg';
	images[1] = 'foto_sander.jpg';
	images[2] = 'image3.jpg';
	images[3] = 'image4.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;

</script>

<img src="DoggoInfobox.jpg" name="slide" width="400" height="200"></img>
}

function myFunction(x) {
	x.classList.toggle("fa-thumbs-down");
  }