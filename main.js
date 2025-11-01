$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
   

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  $('section').each(function () {

    var scrollTop = $(window).scrollTop();  
    var sectionTop = $(this).offset().top - 200;  
    var sectionHeight = $(this).outerHeight();
    var id = $(this).attr('id');
  
    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      $('.navbar ul li a').removeClass('active');
      $('.navbar').find('[href="#' + id + '"]').addClass('active');
    }
  
  });
  

  })
});