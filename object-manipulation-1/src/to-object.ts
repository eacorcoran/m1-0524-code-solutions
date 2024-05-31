/* exported toObject */
function toObject(keyValuePair: any[]): Record<string, unknown> {
  const newObject: Record<string, unknown> = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
