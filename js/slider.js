$(function() {

var currentSlide = 1;

//Cache 
var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');//ul slides
var $slides = $slideContainer.find('.slide');//li slide
//
var interval;

function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-=1008px'},100, function(){
        currentSlide++;
        if(currentSlide == $slides.length)
		    {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });  
    },1700);//end Interval
  }
     
  startSlider();
  
});









