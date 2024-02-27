$(document).ready(function($){
  $(".hero_slider").owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"]
  });
  $(".team_wrapper").owlCarousel({
    items:3,
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
  
  });

   $('.circle_wrapper').circleProgress({
    value: 0.95,
    size: 180,
    thickness:5,
    fill: "#0bbbc1",
  });   
   $('.circle_wrapper2').circleProgress({
    value: 0.75,
    size: 180,
    thickness:5,
    fill: "#0bbbc1",
  });   
   $('.circle_wrapper3').circleProgress({
    value: 0.90,
    size: 180,
    thickness:5,
    fill: "#0bbbc1",
  });
});