export function makeIdGenerator() {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
}
