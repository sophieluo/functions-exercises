// TODO: add your solutions here!

//first function
function combineWords(word1, word2) {
    return word1+word2
}

var result = combineWords('dog', 'house');
console.log(result);

//second function

function repeatPhrase(phrase, n) {

   for (var i=0;i<n;i++) {
     console.log(phrase)
   }
}

repeatPhrase("Hello", 5);

//third function
function toTheNthPower(number, power) {
    counter=1;
    for (var i=0;i<power;i++) {
        counter=counter*number
    }
    return counter
}

var result = toTheNthPower(4, 5);
console.log(result);


//fourth function
function areaOfACircle(radius) {
    return Math.PI*radius*radius
    console.log(Math.PI*radius*radius)
}

areaOfACircle(2);

//fifth function
function pythagoreanTheorem(a, b) {
  return Math.sqrt(a*a+b*b)
  console.log(Math.sqrt(a*a+b*b))
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
