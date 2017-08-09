(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        
        //Carousel slider
         $(".slider").owlCarousel({
            items:1,
             autoplay:true,
            loop:true,
            smartSpeed:1000,                       
             mouseDrag:true,
             touchDrag:false
        });
        
        $(".slider").on('translate.owl.carousel', function() {
            $('.slider-content h3').removeClass('slideInDown animated').hide();
            $('.slider-content h2').removeClass('slideInLeft animated').hide();
            $('.slider-content p').removeClass('slideInLeft animated').hide();
            $('.slider-content a').removeClass('slideInLeft animated').hide();
        });
        $(".slider").on('translated.owl.carousel', function() {
            $('.owl-item.active .slider-content h3').addClass('slideInDown animated').show();
            $('.owl-item.active .slider-content h2').addClass('slideInLeft animated').show();
            $('.owl-item.active .slider-content p').addClass('slideInLeft animated').show();
            $('.owl-item.active .slider-content a').addClass('slideInLeft animated').show();
        });
        
        
       
        $('.parallax-window').parallax({imageSrc: 'img/prlx.jpg'});
        

        
        
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	