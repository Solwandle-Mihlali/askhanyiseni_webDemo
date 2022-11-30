

//jquery scroll effect
$('#homePage').addClass("active");

 $("#homePage").click(function() {
  $('html, body').animate({
    scrollTop: $("#homePage").offset().top-66
  }, 3000);
  return false;
});

$("#aboutUsPage").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#aboutUsPage").offset().top-112
    }, 3000);
 return false;
});

$("#gallery").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#gallery").offset().top-112
    }, 3000);
 return false;
});

$("#contactSection").click(function() {
    $('html, body') .animate({
        scrollTop: $("#contactSection").offset().top-300
    }, 3000);
 return false;
});
//removing active class
$('#homePage').waypoint(function() {
      
    $("nav ul li").children().removeClass("active");
    $("#aboutUsPage").addClass("active");
    
  }, { offset: 101 });

$('#aboutUsPage').waypoint(function() {
      
    $("nav ul li").children().removeClass("active");
    $("#aboutUsPage").addClass("active");
    
  }, { offset: 101 });

