function countLetters(aString){
  uniqueLetters = {};

  aString = aString.split(" ").join("").toLowerCase();

  for(var i = 0; i < aString.length; i++){
    letter = aString[i];
    if(Object.keys(uniqueLetters).includes(letter)){
      uniqueLetters[letter]["count"] += 1;
      uniqueLetters[letter]["index"].push(i);
    }
    else{
      uniqueLetters[letter] = {"count": 1, "index": [i]}
    }

  }

  return uniqueLetters;

}

console.log(countLetters("Lighthouse in the house"))
