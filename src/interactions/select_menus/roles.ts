/** Typing */
import { Guild, GuildMemberRoleManager, Role } from 'discord.js';
import { SelectMenu } from '../../structures/typings/index';

import { games } from '../../data/roles';

export = <SelectMenu>{
  data: {
    customId: 'roles_menu',
    type: 'SELECT_MENU',
    placeholder: 'A quel jeu jouez vous ?',

    options: games,
  },

  exec: async ({ interaction }) => {
    const [value] = interaction.values;

    const guild = interaction.guild as Guild;
    const role = await guild.roles.fetch(value);

    if (role instanceof Role) {
      const roles = interaction.member.roles as GuildMemberRoleManager;

      if (roles.cache.get(value)) {
        roles.remove(role).then(
          () => interaction.reply({ content: `🟡 Le rôle ${role} a été retirer`, ephemeral: true }),
          () => interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true })
        );
      } else {
        roles.add(role).then(
          () => interaction.reply({ content: `🔵 Le rôle ${role} a été ajouter`, ephemeral: true }),
          () => interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true })
        );
      }
    } else interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true });
  },
};
