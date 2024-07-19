import type { CommandKit } from "commandkit";
import type { Client } from "discord.js";

export default function(c: Client<true>, client: Client<true>, handler: CommandKit){
	console.log(`Client ready at ${client.user.tag}`)
}