$(document).ready(function(){

  //listens for clicks on all page buttons
  $('button').on('click', function(){

    //assigns the value of the clicked button's data-color attribute to a new variable called $clickedButtonColor
    var $clickedButtonColor = $(this).data('color');

    //uses the $clickedButtonColor value to find the id matching that value on the page, and picks up the text there (showing the total), converting it to a number
    var $totalCounter = Number($('#' + $clickedButtonColor).text());

    //increments the converted number by 1
    $totalCounter++;

    //places the updated number as text back into the page at the spot where it was found
    $('#' + $clickedButtonColor).text($totalCounter);

    //adds a div with the class color-cube and the matching class to the color of the button clicked
    $('.container').append('<div class="color-cube '+ $clickedButtonColor +'"></div>');
  });//end button click listener function
}); //end document ready
