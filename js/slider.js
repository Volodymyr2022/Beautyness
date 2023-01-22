$(document).ready(function(){
   
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 670,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
           
        ]
    });
});

