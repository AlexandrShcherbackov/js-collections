import { checkSubDirectSize } from '../src/helpers/treesHelper';

const tree = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'apache',
          type: 'directory',
        },
        {
          children: [{ meta: { size: 300 }, name: 'abc.json', type: 'file' }],
          meta: {},
          name: 'NgiNx',
          type: 'directory',
        },
        {
          children: [{ meta: { size: 300 }, name: 'config.json', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'eTc',
      type: 'directory',
    },
    { meta: { size: 900 }, name: 'hosts', type: 'file' },
    { meta: { size: 500 }, name: 'config.json', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

describe('checkSubDirectSize', () => {
  test('should work', () => {
    expect(checkSubDirectSize(tree)).toEqual([['hosts', 900], ['eTc', 600], ['config.json', 500]]);
  });
});
