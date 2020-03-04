const map = (f, tree) => ({
  ...tree,
  name: f(tree).name,
  children: tree.type === 'directory' ? tree.children.map((c) => map(f, c)) : undefined,
});

const downcaseFileNames = (node) => {
  if (node.type === 'file') {
    return { ...node, name: node.name.toLowerCase() };
  }

  return { ...node, children: node.children.map(downcaseFileNames) };
};

export { map, downcaseFileNames };
