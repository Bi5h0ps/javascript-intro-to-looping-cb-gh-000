function forloop(array) {
  for (var i = 0; i <25) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}