$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scroll >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //  slide-up 
    $('scroll-up-btn').click(function(){
        $('html').animated({scrollTop: 0});
    })

    //toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    //     $('.menu-btn i').click(function(){
    //         $('.navbar .menu').toggleClass("active");
    // });    
});
  //carousel
  $('carousel').owlCarousel({
      margin: 20,
      loop:true,
      autoplayTimeout: 2000,
      autoplayHoverPause : true,
      responsive: {
          0: {
             items: 1,
             nav: false 
          },
          600: {
              items: 2,
              nav: false
          },
        1000: {
            items: 3,
            nav: false
        }
      }
  })
})