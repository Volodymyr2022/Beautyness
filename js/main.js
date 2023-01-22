

// ===== SHOW - on click btn ======

$('.btn-seemore').on('click', function() {
   $(this).prev('div').toggle('slow', function() {
   });

   $(this).html($(this).html() === 'SEE LESS'? 'SEE MORE' :'SEE LESS');
   
})


// let truncate = document.querySelector(".procedures__text p");
//    $clamp(truncate, {
//     clamp: 3, 
//     useNativeClamp: false 
//    });

