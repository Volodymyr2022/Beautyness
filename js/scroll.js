// ===== Scroll =====

$("a").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing",
       behavior: 'smooth'
    });
    return false;
 });


// ==== UP - btn ======
function backToTop() {
    let button = $('.up-btn');
    let header = $('.header__menu');
    $(window).on('scroll', () => {
        if($(this).scrollTop() >= 100) {
        button.fadeIn();
        header.css('height', '70px');
        } else {
            button.fadeOut();
            header.css('height', '105px');
        } 

    });
    }
    backToTop();

    // ---- Header - mini ------

//     window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.height = "60px";
//   } else {
//     document.getElementById("header").style.height = "105px";
//   }
// }

