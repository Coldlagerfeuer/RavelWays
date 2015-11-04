 
 //<!-- ========================= -->
        //////////////This Theme Design and Developed //////////////////////
        //////////// by www.wpfreeware.com======================-->

 jQuery(document).ready(function(){
   
  // Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
   
     // Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $('.tootlip').tooltip(); 
  $("ul#ticker01").liScroll(); 

});


  <!-- Preloader -->

  // <![CDATA[
    jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(700).fadeOut('slow'); // will fade out the white
													// DIV that covers the
													// website.
      $('body').delay(700).css({'overflow':'visible'});
    })
  // ]]>

  // slick slider call
  $(document).ready(function(){  
  $('.owl-carousel').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
});