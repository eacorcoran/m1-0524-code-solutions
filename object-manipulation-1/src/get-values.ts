/* exported getValues */
function getValues(object: Record<string, unknown>): any[] {
  const arrayvalues: any[] = [];
  for (const key in object) {
    arrayvalues.push(object[key]);
  }
  return arrayvalues;
}
