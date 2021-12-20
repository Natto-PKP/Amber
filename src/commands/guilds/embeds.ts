import { Command } from '../../structures/typings';

export = <Command>{
  permissions: { user: ['ADMINISTRATOR'] },

  body: {
    name: 'embeds',
    description: '',
  },

  exec: () => {},
};
