var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

$(document).ready(function(){

$('button').on('click', function(){
  var $clickedButtonColor = $(this).data('color');
  console.log($clickedButtonColor);

  $('.container').append('<div class="color-cube '+ $clickedButtonColor +'"></div>');

  if($clickedButtonColor=='red'){
    totalRed++;
    $('#red').text(totalRed);
  }

});



});
