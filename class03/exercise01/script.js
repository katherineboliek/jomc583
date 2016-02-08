//http://jsbin.com/lerezoq/edit?js

function farToCel(far){
  var cel = (far-32)*(5/9);
  cel = Math.floor(cel);
  console.log(cel);

  if (cel<10){
    temp = "cold";
  } else if (cel>=10 && cel<25){
    temp = "fair";
  } else {
    temp = "hot";
  }

  console.log("  The current temperature is " + cel + " degrees Celcius. It's " + temp + " outside.");
}

farToCel(32);

----------

function sumNum(param){
  var count = 0;      //placeholder to increment things
  for (var i=0; i<param.length; i++){   //for loop through the array
    count += param[i];    //the same as count = count + param[i]
  }
  console.log(count);   //or return here and log function var outside, but this needs to be within the function because count isnt a global variable
}

var add = [10, 20, 100, 2, 5];
var answer = sumNum(add);

----------

function greatest(param){
  var big = 0;
  for (var i=0; i<param.length; i++){   //or for(i in param)
    if (param[i]>big){ //could add a currentNumber var and set to param[i], and then put that into the if statement
      big=param[i];
    }
  }
  console.log(big);
}
var add = [10, 20, 200, 2, 5];
greatest(add);

----------

var myString = "katherine boliek";

function charFreq(text){
  var myCharacters = {};

  for(var i =0; i<text.length; i++){
    var curChar = text.charAt(i);
    if(myCharacters[i] === undefined){
      myCharacters[curChar] = 0;
    }

  myCharacters[curChar]++;

  }
  return myCharacters;
}

var frequency = charFreq(myString);

for(var j in frequency) {
  console.log(j + ": " + frequency[j]);
}

var frequency = charFreq(myString);

for(var j in frequency) {
  console.log(j + ": " + frequency[j]);
}

-----------
