'use strict';
/* exported pick */
function pick(source, keys) {
  const NewObject = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        NewObject[key] = source[key];
      }
    }
  }
  return NewObject;
}
