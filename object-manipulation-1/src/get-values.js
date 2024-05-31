'use strict';
/* exported getValues */
function getValues(object) {
  const arrayvalues = [];
  for (const key in object) {
    arrayvalues.push(object[key]);
  }
  return arrayvalues;
}
