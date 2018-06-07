var words = ["ground", "control", "to", "major", "tom"];

var map = function(str, func) {
  var list = [];
  str.forEach(function(e) {
    list.push(func(e));
  })
  console.log(list);
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

