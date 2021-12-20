import { ClientUser } from 'discord.js';
import { Button, CommandOption, SelectMenu } from '../../../../structures/typings/index';

export = <CommandOption>{
  permissions: { user: ['ADMINISTRATOR'] },

  option: {
    name: 'roles',
    description: "Incrustez l'embed du rôle menu",
    type: 'SUB_COMMAND',
  },

  exec: async ({ interaction, sucrose }) => {
    const live_notif = sucrose.interactions.buttons.get('live_notif') as Button<'base'>;
    const remove_roles = sucrose.interactions.buttons.get('remove_roles') as Button<'base'>;
    const roles_menu = sucrose.interactions.select_menus.get('roles_menu') as SelectMenu;

    const icon_url = (sucrose.user as ClientUser).avatarURL() as string;

    await interaction.reply({
      embeds: [
        {
          author: { name: '• Sélectionnez vos rôles avec les menus si dessous', icon_url },
          image: { url: 'https://i.imgur.com/dqDuxoa.jpg' },
          footer: { text: 'Cliquer une seconde fois sur les interactions retire le rôle' },
        },
      ],

      components: [
        { type: 'ACTION_ROW', components: [live_notif.data, remove_roles.data] },
        { type: 'ACTION_ROW', components: [roles_menu.data] },
      ],
    });
  },
};
