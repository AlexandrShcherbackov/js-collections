const defference = (set1, set2) => (
  new Set(Array.from(set1).filter((value) => !set2.has(value)))
);

export default defference;
