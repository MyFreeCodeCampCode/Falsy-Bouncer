function bouncer(arr) {
  var newArray =arr.filter (function (val) {
    if (val != Boolean)
      return val;
  });
  
  return newArray;
}

//test case
//bouncer([7, "ate", "", false, 9]);
