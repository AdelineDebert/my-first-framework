function byId(x) {
  return document.getElementById(x);
}

function byClass(x) {
  var elements = document.getElementsByClassName(x);
  return Array.prototype.slice.call(elements);  
}

function byTag(x) {
  return document.getElementsByTagName(x);
}

function
