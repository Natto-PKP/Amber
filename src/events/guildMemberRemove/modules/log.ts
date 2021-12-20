import { createCanvas, loadImage } from 'canvas';
import { roundRect, font } from '../../../structures/functions/canvas';

/** Typings */
import { Params } from '../../../structures/typings';
import { TextChannel } from 'discord.js';

const color = '#141414';

export = {
  listener: async ({ args: [member] }: Params<'guildMemberAdd'>) => {
    const canvas = createCanvas(1070, 320);
    const ctx = canvas.getContext('2d');

    /* Draw zone */
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 8);
    ctx.clip();
    ctx.save();

    /* Background */
    ctx.drawImage(await loadImage('./ressources/images/leave.png'), 0, 0, canvas.width, canvas.height);

    /* Label */
    ctx.beginPath();
    ctx.fillStyle = '#ed4245';
    ctx.rect(0, 0, 12, canvas.height);
    ctx.fill();
    ctx.closePath();

    /* Avatar */
    ctx.beginPath();
    ctx.fillStyle = color;
    roundRect(ctx, 786, 36, 248, 248, 8);
    ctx.fill();
    roundRect(ctx, 790, 40, 240, 240, 8);
    ctx.clip();
    ctx.drawImage(await loadImage(member.user.displayAvatarURL({ format: 'png', size: 512 })), 790, 40, 240, 240);
    ctx.restore();
    ctx.closePath();

    /* Icon */
    ctx.drawImage(await loadImage('./ressources/icons/sign-out.png'), 42, 232, 48, 48);

    /* Username */
    ctx.beginPath();
    ctx.font = `64px "Gemunu Libre bold, ${font}"`;
    let username = member.user.username;
    while (ctx.measureText(username).width > 650) username = username.slice(0, username.length - 2);
    ctx.fillStyle = color;
    ctx.fillText(`${username}`, 102, 276);
    ctx.closePath();

    const channel = await member.guild.channels.fetch('874374108912173080');
    if (channel instanceof TextChannel) channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'join.png' }] });
  },
};
