export function* keyGenerator() {
  let key = 0;
  while (true) {
    yield key;
    key++;
  }
  return key
}