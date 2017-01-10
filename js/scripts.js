$(document).ready(function(){
  $("#dark").click(function(){
    $("body").addClass('bg-dark');
  });

  $("#light").click(function(){
    $("body").removeClass();
  });

  $('li.select').mouseenter(function(){
    $(this).addClass('highlight');
  });

  $('li.select').mouseleave(function(){
    $(this).removeClass('highlight');
  });
});
