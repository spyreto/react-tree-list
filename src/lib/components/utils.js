//Generates unique keys for list elements
export function makeIdGenerator() {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
}

//Defining keys on lists that have children
export const setListKeys = (list) => {
  const getId = new makeIdGenerator();

  const traverse = (node) => {
    console.log(node);
    node.key = `ddl-${getId()}`;
    if (node.children) {
      return node.children.map((item) => traverse(item));
    }
  };
  return list.map((item) => {
    item.key = `ddl-${() => getId()}`;
    return traverse(item);
  });
};
