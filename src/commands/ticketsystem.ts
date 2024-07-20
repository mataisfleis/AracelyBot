import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType } from 'discord.js';
 
export const data: CommandData = {
    name: 'ticket-system',
    description: 'Configura el sistema de tickets',
	options: [
		{
			name: 'activar',
			description: 'Activa o desactiva el sistema de tickets',
			type: ApplicationCommandOptionType.Boolean,
		},
		{
			name: 'canal',
			description: 'Establece el canal para activar tickets',
			type: ApplicationCommandOptionType.Channel
		}
	]
}
 
export function run({ interaction, client, handler }: SlashCommandProps) {
    interaction.reply(`Este comando esta incompleto!`);
}
 
export const options: CommandOptions = {
    devOnly: false,
    userPermissions: ["ManageGuild", "ManageChannels"],
    botPermissions: [],
}