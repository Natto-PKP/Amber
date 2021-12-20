/** Typing */
import { Button } from '../../structures/typings/index';
import { GuildMemberRoleManager } from 'discord.js';

import { roles, games } from '../../data/roles';

export = <Button<'base'>>{
  data: {
    customId: 'remove_roles',
    type: 'BUTTON',

    style: 'DANGER',
    label: 'Retirer les roles actuels',
  },

  exec: ({ interaction }) => {
    const member_roles = interaction.member.roles as GuildMemberRoleManager;
    const roles_to_remove = [...Object.values(roles), ...games.map((game) => game.value)].filter((id) => member_roles.cache.has(id));

    if (roles_to_remove.length) {
      member_roles.remove(roles_to_remove).then(
        () => interaction.reply({ content: '🟡 Vos rôles ont été retirer', ephemeral: true }),
        () => interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true })
      );
    } else interaction.reply({ content: '**`❌ | `** Vous ne possédez aucun rôle du menu', ephemeral: true });
  },
};
