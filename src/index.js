import { findFilesByName } from './helpers/treesHelper';

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

console.log(findFilesByName(tree, 'config.json'));
