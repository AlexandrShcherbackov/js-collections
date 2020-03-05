import { findFilesByName } from '../src/helpers/treesHelper';

const tree = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NgiNx',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'config.json', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'eTc',
      type: 'directory',
    },
    { meta: {}, name: 'hosts', type: 'file' },
    { meta: {}, name: 'config.json', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

describe('findFilesByName', () => {
  test('should works', () => {
    expect(findFilesByName(tree, 'config.json')).toEqual(['/eTc/CONSUL/config.json', '/config.json']);
    expect(findFilesByName(tree, 'hosts')).toEqual(['/hosts']);
  });
});
