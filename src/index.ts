import {Client, GatewayIntentBits} from 'discord.js'
import { CommandKit } from 'commandkit'
import path from 'path';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages
	]
});

new CommandKit({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    devGuildIds: ['900186384093024327', '841077479568441384'],
    devUserIds: ['726159353970819102'],
    devRoleIds: []
});

client.login(process.env.DISCORD_TOKEN);