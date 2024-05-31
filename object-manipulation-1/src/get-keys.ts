/* exported getKeys */
function getKeys(object: Record<string, unknown>): any[] {
  const arraykeys: any[] = [];
  for (const key in object) {
    arraykeys.push(key);
  }
  return arraykeys;
}
