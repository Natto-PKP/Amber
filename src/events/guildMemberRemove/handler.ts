import { readdir } from 'fs';
import path from 'path';

/** Typings */
import { Params } from '../../structures/typings';

export = {
  listener: async (params: Params<'guildMemberAdd'>) => {
    readdir(path.join(__dirname, 'modules'), (err, files) => files.forEach((file) => import(`./modules/${file}`).then((mdl) => mdl.listener(params))));
  },
};
