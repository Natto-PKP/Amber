import { Params } from '../../../structures/typings';

export = {
  listener: async ({ args: [member] }: Params<'guildMemberAdd'>) => {
    /** Ajout du rôle followers */
    member.roles.add('874375602134741053');
  },
};
