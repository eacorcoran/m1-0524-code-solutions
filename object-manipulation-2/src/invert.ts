/* exported invert */
function invert(source: Record<string, unknown>): Record<string, unknown> {
  const NewObject: Record<string, unknown> = {};
  let newKey: any = '';
  for (const key in source) {
    newKey = source[key];
    NewObject[newKey] = key;
  }
  return NewObject;
}
