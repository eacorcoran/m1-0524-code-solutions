'use strict';
/* exported getKeys */
function getKeys(object) {
  const arraykeys = [];
  for (const key in object) {
    arraykeys.push(key);
  }
  return arraykeys;
}
