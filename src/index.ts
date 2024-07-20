import {Client, GatewayIntentBits} from 'discord.js'
import { CommandKit } from 'commandkit'
import path from 'path';
import { connect } from 'mongoose'

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

if(process.env.MONGO_URL === undefined) throw new Error('Mongo URL not defined')

connect(process.env.MONGO_URL).then(() => {
	console.log('Connected successfully to MongoDB')
})

client.login(process.env.DISCORD_TOKEN);