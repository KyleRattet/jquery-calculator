$( document ).ready(function() {
    // console.log( "ready!" );

//get number button values
$('.buttons span').not('.operator').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(keyPress + " ");
});

//get operator buttons
$('.operator').not('#cancel').not('#calc').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(keyPress + " ");
});

//cancel or clear button to empty the screen
$('#cancel').on('click', function () {
  $('#screen').empty();
});

//calc (equals) button, get button, on click, takes the screen html and
//converts to integer
$('#calc').on('click', function () {
  //returns total inputs
  var stringInput = ($('#screen').html());
  //split up inputs to three seperate vars
  var arrayInput = stringInput.split(" ");
  var firstInput = parseInt(arrayInput[0]);
  var secondInput = arrayInput[1];
  var thirdInput = parseInt(arrayInput[2]);
  $('#screen').html(addition(firstInput,thirdInput));

});


});

//add function
function addition (firstInput,thirdInput) {
  return firstInput + thirdInput;
}
