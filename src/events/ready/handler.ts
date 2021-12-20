import { Guild, GuildMember } from 'discord.js';
import { Params } from 'src/structures/typings';

export = {
  listener: async ({ sucrose }: Params<'ready'>) => {
    // const guild = (await sucrose.guilds.fetch('874374108912173077')) as Guild;
    // const member = (await guild.members.fetch('570642674151981135')) as GuildMember;
    // sucrose.emit('guildMemberRemove', member);
    // sucrose.interactions.commands.create('*', '874374108912173077');
  },
};
