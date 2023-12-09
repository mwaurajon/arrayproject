
  function concatAll(strings) {
    strings.reduce((array, currentString) => {
       stringArray=[ "one","two","three"]
      array += currentString;
      return array;
    });
    return result;
  }
  const strings = ["one", "two", "three"];
  const concatenatedString = concatAll(strings);
  console.log(concatenatedString);



