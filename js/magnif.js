$('.popup-with-move-anim').magnificPopup({
    items: [
     
      {
        src: '#my-popup', 
        type: 'inline',
        
      }
    ],

	fixedContentPos: true,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,
		
	midClick: true,
	removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
  
});

$('.btn-readmore').magnificPopup({
  items: [
   
    {
      src: '#my-popup2', 
      type: 'inline',
      
    }
  ],

fixedContentPos: true,
fixedBgPos: true,

overflowY: 'auto',

closeBtnInside: true,
preloader: false,
  
midClick: true,
removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom',

});