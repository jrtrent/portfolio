function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html("");

  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


$(document).ready(function() {
  event.preventDefault();
  $('#portLinks').hide();
  $('#aboutMe').hide();
  $('#portLinks').hide();
  $('#connect').hide();

  var speed = 100;
  var delay = $("#name").text().length * speed + speed;
  typeEffect($("h1"), speed);
  setTimeout(function() {
    $("p").css("display", "block");
    typeEffect($("p"), speed);
  }, delay);

  typeEffect($("h2"), speed);
  setTimeout(function() {
    $("p").css("display", "block");
    typeEffect($("p"), speed);
  }, delay);
});
$(window).load(function() {
  
  

    var aboutPos = $('#about').position();
    var portfolioPos = $('#portfolio').position();
    var homePos= $('#home').position();
    var imgPos=$('#icons').position();
    
    $('i').css({
      position: 'absolute',
      zIndex: '1',
      top: imgPos.top + 100,
      left: '47%'
    });
    
    setTimeout(function() {
      $('#about').animate({
        top: aboutPos.top + 10,
        left: aboutPos.left - 10
      }, 500);
    }, 250);
    
    setTimeout(function() {
      $('#portfolio').animate({
        top: portfolioPos.top,
        left: portfolioPos.left
      }, 250);
      
      $('#home').animate({
        top: homePos.top + 10,
        left: homePos.left - 6
      }, 500);
    }, 500);
    
});

$("#portfolio").on("click",function(){
 
  $("#portLinks").show();
});

$("#about").click(function(){
  $("#main-container").empty();
  $('#aboutMe').show();
});

$("#contact").click(function(){
  $("#main-container").empty();
  $('portfolioText').show();
});

$("#home").click(function(){
  $("#main-container").empty();
  $('portfolioText').show();
});


