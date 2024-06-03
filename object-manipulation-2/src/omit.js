'use strict';
/* exported omit */
function omit(source, keys) {
  const newObject = {};
  for (const key in source) {
    let match = false;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        match = true;
      }
    }
    if (match === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
