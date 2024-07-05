

;await (async()=>{
  'use strict';
// --- CommandKit require() polyfill ---
  if (typeof require === "undefined") {
    const { createRequire } = await import("node:module");
    const __require = createRequire(import.meta.url);
    Object.defineProperty(globalThis, "require", {
      value: (id) => {
        return __require(id);
      },
      configurable: true,
      enumerable: false,
      writable: true,
    });
  }
// --- CommandKit require() polyfill ---


})();



// src/index.ts
import dotenv from "dotenv";
import { Client, IntentsBitField } from "discord.js";
import { CommandKit } from "commandkit";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env${process.env.NODE_ENV == "development" ? ".development.local" : ""}` });
var __dirname = dirname(fileURLToPath(import.meta.url));
var client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});
new CommandKit({
  client,
  eventsPath: join(__dirname, "events"),
  commandsPath: join(__dirname, "commands")
});
client.login(process.env.TOKEN);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG5cbmRvdGVudi5jb25maWcoeyBwYXRoOiBgLmVudiR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50JyA/ICcuZGV2ZWxvcG1lbnQubG9jYWwnIDogJyd9YCB9KVxuXG5pbXBvcnQgeyBDbGllbnQsIEludGVudHNCaXRGaWVsZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHsgQ29tbWFuZEtpdCB9IGZyb20gJ2NvbW1hbmRraXQnO1xuXG5pbXBvcnQgeyBqb2luLCBkaXJuYW1lIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5cbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKTtcblxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gIGludGVudHM6IFtcbiAgICBJbnRlbnRzQml0RmllbGQuRmxhZ3MuR3VpbGRzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5HdWlsZE1lbWJlcnMsXG4gICAgSW50ZW50c0JpdEZpZWxkLkZsYWdzLkd1aWxkTWVzc2FnZXMsXG4gICAgSW50ZW50c0JpdEZpZWxkLkZsYWdzLk1lc3NhZ2VDb250ZW50LFxuICBdLFxufSk7XG5cbm5ldyBDb21tYW5kS2l0KHtcbiAgY2xpZW50LFxuICBldmVudHNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ2V2ZW50cycpLFxuICBjb21tYW5kc1BhdGg6IGpvaW4oX19kaXJuYW1lLCAnY29tbWFuZHMnKSxcbn0pO1xuXG5jbGllbnQubG9naW4ocHJvY2Vzcy5lbnYuVE9LRU4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLE9BQU8sWUFBWTtBQU1uQixTQUFTLFFBQVEsdUJBQXVCO0FBQ3hDLFNBQVMsa0JBQWtCO0FBRTNCLFNBQVMsTUFBTSxlQUFlO0FBQzlCLFNBQVMscUJBQXFCO0FBUjlCLFFBQVEsSUFBSSxXQUFXLFFBQVEsSUFBSSxZQUFZO0FBRS9DLE9BQU8sT0FBTyxFQUFFLE1BQU0sT0FBTyxRQUFRLElBQUksWUFBWSxnQkFBZ0IsdUJBQXVCLEVBQUUsR0FBRyxDQUFDO0FBUWxHLElBQU0sWUFBWSxRQUFRLGNBQWMsWUFBWSxHQUFHLENBQUM7QUFFeEQsSUFBTSxTQUFTLElBQUksT0FBTztBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNQLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLE1BQU07QUFBQSxJQUN0QixnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLGdCQUFnQixNQUFNO0FBQUEsRUFDeEI7QUFDRixDQUFDO0FBRUQsSUFBSSxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsWUFBWSxLQUFLLFdBQVcsUUFBUTtBQUFBLEVBQ3BDLGNBQWMsS0FBSyxXQUFXLFVBQVU7QUFDMUMsQ0FBQztBQUVELE9BQU8sTUFBTSxRQUFRLElBQUksS0FBSzsiLAogICJuYW1lcyI6IFtdCn0K