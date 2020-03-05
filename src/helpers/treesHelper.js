const map = (f, tree) => ({
  ...tree,
  name: f(tree).name,
  children: tree.type === 'directory' ? tree.children.map((c) => map(f, c)) : undefined,
});

const filter = (predicat, tree) => {
  if (!predicat(tree)) {
    return null;
  }

  if (tree.type !== 'directory') {
    return tree;
  }

  const newChildren = tree.children
    .map((c) => filter(predicat, c))
    .filter((v) => v);

  return {
    ...tree,
    children: newChildren,
  };
};

const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);

  return node.type === 'file'
    ? newAcc
    : node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

const downcaseFileNames = (node) => {
  if (node.type === 'file') {
    return { ...node, name: node.name.toLowerCase() };
  }

  return { ...node, children: node.children.map(downcaseFileNames) };
};

const findFilesByName = (tree, searchString) => {
  const iter = (acc, currentPath, item) => {
    const newPath = item.name === '/' ? '' : `${currentPath}/${item.name}`;
    if (item.type === 'file' && item.name === searchString) {
      return [...acc, newPath];
    }

    if (item.children) {
      return item.children.reduce((iAcc, ii) => iter(iAcc, newPath, ii), acc);
    }

    return acc;
  };

  return iter([], '', tree);
};

export {
  map, filter, reduce, downcaseFileNames, findFilesByName,
};
