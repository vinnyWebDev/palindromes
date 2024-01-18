//A car a man a maraca

const palindromes = function (phrase) {
  //eliminating spaces and converting to all lower case
  let reverseStr = "";
  //removing punctuation and spaces
  const noSpace = phrase.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, "");
  console.log(noSpace);
  //making it all lower case
  let noSpaceLow = noSpace.toLowerCase();
  console.log(noSpaceLow);

  //reversing the string
  for (let i = noSpaceLow.length - 1; i >= 0; i--) {
    //console.log(i);
    reverseStr += noSpaceLow[i];
    //  console.log(reverseStr);
  }

  //checking if the strings match
  if (reverseStr === noSpaceLow) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("A car a man a maraca!"));
