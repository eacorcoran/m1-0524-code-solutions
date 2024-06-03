'use strict';
/* exported invert */
function invert(source) {
  const NewObject = {};
  let newKey = '';
  for (const key in source) {
    newKey = source[key];
    NewObject[newKey] = key;
  }
  return NewObject;
}
