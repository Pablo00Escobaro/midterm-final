var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;


function nextSlide(integer){
	//set default classes
	slides[currentSlide].className = 'slide';

    //count
    currentSlide = (currentSlide+integer)%slides.length;
    if (currentSlide<0) {
    	currentSlide = slides.length-1;
    }

	//set the new classes
	slides[currentSlide].className = 'slide showing';

}