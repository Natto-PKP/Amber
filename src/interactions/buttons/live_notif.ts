/** Typing */
import { Button } from '../../structures/typings/index';
import { Guild, GuildMember, GuildMemberRoleManager } from 'discord.js';

import { roles } from '../../data/roles';

export = <Button<'base'>>{
  data: {
    customId: 'live_notif',
    type: 'BUTTON',

    style: 'PRIMARY',
    emoji: '🔔',
    label: 'Activer les notifications de live',
  },

  exec: async ({ interaction }) => {
    const member = interaction.member as GuildMember;
    const member_roles = member.roles as GuildMemberRoleManager;

    const role = await member.guild.roles.fetch(roles.roles_active_live_notif);

    if (role) {
      if (role.members.get(member.id)) {
        member_roles.remove(role).then(
          () => interaction.reply({ content: '🟡 Vous ne suivez plus les annonces de live', ephemeral: true }),
          console.error // () => interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true })
        );
      } else {
        member_roles.add(role).then(
          () => interaction.reply({ content: '🔵 Vous suivez maintenant les annonces de live', ephemeral: true }),
          console.error // () => interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true })
        );
      }
    } else interaction.reply({ content: '**`❌ | `** Une erreur est survenue', ephemeral: true });
  },
};
