(function() {
console.log("main.js attached")

var theImages = document.querySelectorAll(".image-holder"),
	theHeading = document.querySelector(".heading"),
	theSubhead = document.querySelector(".main-copy h2"),
	theSeasonText = document.querySelector(".main-copy p"),
	appliedClass;

function changeElements() {
	//debugger;
	//debugger is a special term that stops code execution
	//shows you the "this" keywork that shows where in the DOM tree you are
	let subImages = document.querySelector(".subImagesContainer");
	let objectIndex = dynamicContent[this.id];

	//remove duplicate images
	while (subImages.firstChild) {
		subImages.removeChild(subImages.firstChild);
	}

	//add the images to the bottom of the page
	objectIndex.images.forEach(function(image, index){
		//create image element
		let newSubImg = document.createElement("img");
		//add a css class to it
		newSubImg.classList.add("thumb");
		//set the source
		newSubImg.src = "images/" +objectIndex.images[index];
		//add it to the page
		subImages.appendChild(newSubImg);
	})

	//remove the colours we applied on the the last click
	theSubhead.classList.remove(appliedClass);
	theHeading.classList.remove(appliedClass);
	//change the text using the values of the properties of the object
	theSubhead.firstChild.nodeValue = objectIndex.headline;
	theSeasonText.firstChild.nodeValue = objectIndex.text;
	//add the colour that corresponds to the season we clicked on
	theSubhead.classList.add(this.id);
	theHeading.classList.add(this.id);

	appliedClass = this.id;


}

//loops through collection
theImages.forEach(function(image, index){
	//will add an event handler to each image
	image.addEventListener("click", changeElements, false);
});


//document.querySelector('#spring').click();
//way to call the function to work right away
changeElements.call(document.querySelector('#spring'));

})();
