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

const downcaseFileNames = (node) => {
  if (node.type === 'file') {
    return { ...node, name: node.name.toLowerCase() };
  }

  return { ...node, children: node.children.map(downcaseFileNames) };
};

export { map, filter, downcaseFileNames };
