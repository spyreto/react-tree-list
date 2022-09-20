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
    node.key = `ddl-${getId()}`;
    if (node.children) {
      return {
        children: node.children.map((item) => traverse(item)),
        ...node,
      };
    }
    return node;
  };

  return list.map((item) => {
    item.key = `ddl-${() => getId()}`;
    return traverse(item);
  });
};
