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

//sixth question
function isXEvenlyDivisibleByY(x, y) {
    if (x%y===0) {
      return true
      console.log("true");
    }
    else return false
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

//seventh function
function countVowels(word) {
    var counter=0;
    for (i=0;i<word.length;i++) {
        if (word[i]==='a'||word[i]==='e'||word[i]==='i'||word[i]==='o'||word[i]==='u'||word[i]==='y') {
            counter++;
    }
    }
    return counter;
}

var result = countVowels("stealing");
console.log(result);
