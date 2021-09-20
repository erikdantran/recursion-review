// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];

// // used for stringifyJSON spec
// // hint: JSON does not allow you to stringify functions or
// // undefined values, so you should skip those key/value pairs.
// unstringifiableValues = [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];



var stringifyJSON = function(obj) {
  // your code goes here
  var string = '';
  if (obj === null ) {
    return 'null';
  }
  if (typeof obj === 'number' ||
      typeof obj === 'boolean') {
    string += obj.toString();
  }
  if (typeof obj === 'string') {
    string += '"' + obj + '"';
  }
  if (typeof obj === 'object' && Array.isArray(obj)) {
    string += '[';
    // string += obj.forEach(element, stringifyJSON)
    for (var i = 0; i < obj.length; i++) {
      string += stringifyJSON(obj[i])
      if (i !== obj.length-1) {
        string += ',';
      }
    }
    string += ']';
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    string += '{';
    for (var key in obj) {
      string += stringifyJSON(key);
      string += ':';
      string += stringifyJSON(obj[key])
    }
    string += '}';
  }


  return string
};




// var stringifyJS