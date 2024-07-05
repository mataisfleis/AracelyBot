import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

dotenv.config({ path: `.env${process.env.NODE_ENV == 'development' ? '.development.local' : ''}` })

import { Client, IntentsBitField } from 'discord.js';
import { CommandKit } from 'commandkit';

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

new CommandKit({
  client,
  eventsPath: join(__dirname, 'events'),
  commandsPath: join(__dirname, 'commands'),
});

client.login(process.env.TOKEN);
