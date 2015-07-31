$( document ).ready(function() {

function calc (resultsArray) {
  //variables
  firstNum = parseInt(resultsArray[0]);
  operatorInput = resultsArray[1];
  secondNum = parseInt(resultsArray[2]);
  //if statement to check operator, followed by calculation
    if (operatorInput === "+") {
      return (firstNum + secondNum);
    } else if (operatorInput === "-") {
      return (firstNum - secondNum);
    } else if (operatorInput === "*") {
      return (firstNum * secondNum);
    } else if (operatorInput === "/") {
      return (firstNum/secondNum);
    } else return ('wrong');
}


//calculate button
$('#calc').on('click', function () {
    var operatorArray= ["+", "-", "*", "/"];
    var calcScreen = $('#screen').html();
    var resultsArray = calcScreen.split(" ");
    $('#screen').html(calc(resultsArray));
});

//get number button values
$('.buttons span').not('.operator').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(keyPress);
});

//get operator buttons
$('.operator').not('#cancel').not('#calc').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(" " + keyPress + " ");
});

//cancel or clear button to empty the screen
$('#cancel').on('click', function () {
  $('#screen').empty();
});

});

    // console.log( "ready!" );
// var operators
// var test = $('.operator');
// var plus = $(test[4]).html();
// var minus = $(test[3]).html();
// var multiply = $(test[2]).html();
// var divide = $(test[1]).html();
// var operatorArray=[plus,minus,multiply,divide];

//var screen results
// var screenResults = ($('#screen').html());

///var screen results split on operator
///returns results array


// for (var i = 0; i < operatorArray.length; i++) {
//   for (var j = 0; j < resultsArray.length; j++) {
//     (if operatorArray[i] === resultsArray[j]);
//   };
// };

//calc (equals) button, get button, on click, takes the screen html and
//converts to integer
// $('#calc').on("click", function(){
//    var answer = eval($('#screen').html());
//    $('#screen').html(null).append(answer);
//      //$('#screen').append(answer);
//  });





// //add function
// function addition (firstInput,thirdInput) {
//   return firstInput + thirdInput;
// }

// function subtraction (firstInput, thirdInput) {
//   return firstInput - thirdInput;
// }

// function calculate (secondInput) {
//   var result = [];
//   if(secondInput === "+") {
//     result.push(addition(firstInput, thirdInput));
//   }
//   else if(secondInput === "-") {
//     result.push(subtraction(firstInput, thirdInput));
//   }
//   return result;
// }

// $('#calc').on('click', function () {
//   //returns total inputs
//   var stringInput = ($('#screen').html());
//   //split up inputs to three seperate vars
//   var arrayInput = stringInput.split(" ");
//   var firstInput = parseInt(arrayInput[0]);
//   var secondInput = arrayInput[1];
//   var thirdInput = parseInt(arrayInput[2]);
//   $('#screen').html(calculate(firstInput, thirdInput));

// $('.operator').not('#cancel').not('#calc').on('click', function () {
//   var keyPress = $(this).html();
//   $('#screen').append(" " + keyPress + " ");
// });

