/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const NewObject: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        NewObject[key] = source[key];
      }
    }
  }
  return NewObject;
}
