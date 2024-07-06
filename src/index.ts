import { Client, IntentsBitField } from 'discord.js'
import { CommandKit } from 'commandkit'
import './utils/server';
import { join } from 'path';

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	  ]
})

new CommandKit({
	client,
	eventsPath: join(__dirname, 'events'),
    commandsPath: join(__dirname, 'commands'),
})