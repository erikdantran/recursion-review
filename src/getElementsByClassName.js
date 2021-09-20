// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];


// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  //use document.body, element.childNodes, and element.classList
  // your code here

  //if document.body does contain classname, then recall function and add result to result
  //iterate through document.body, check if classname is inside classlist (use contain)
  var result = [];
  //variable result that is an array
  var innerMethod = function (element) {
    //create innerMethod function taking element as parameter
    if (element.classList && element.classList.contains(className)) {
      //if classlist exists and if the classlist contains classname
      result.push(element);
      //push the element into result
    }
    // console.log(result)
    element.childNodes.forEach(innerMethod);
    //iterate through each childnode in element using innerMethod
  };
  innerMethod(document.body);
  // console.log(result)
  // result.join()
  return result;
  // console.log(result)
};






