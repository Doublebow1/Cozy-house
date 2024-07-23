const slider = document.querySelector('.friends__slider');
const sliderCards = document.querySelectorAll('.friend__card')
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');

let sliderWidth = 370;
let currientSlider = 0;

function nextSlide() {
	currientSlider++
	if(currientSlider > sliderCards.length - 3){
		currientSlider = 0
	}
	showSlide()
	console.log(currientSlider);
}

function prevSlide() {
	currientSlider--
	if(currientSlider < 0){
		currientSlider =  sliderCards.length -1;
	}
	showSlide()
	console.log(currientSlider);

}

function showSlide() {
	slider.style.transform = `translateX(-${currientSlider * sliderWidth}px)`
}

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);
