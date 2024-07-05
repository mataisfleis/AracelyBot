

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
console.log(`.env${process.env.NODE_ENV == "development" ? ".development.local" : ""}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG5cbmNvbnNvbGUubG9nKGAuZW52JHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnID8gJy5kZXZlbG9wbWVudC5sb2NhbCcgOiAnJ31gKVxuXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogYC5lbnYke3Byb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcgPyAnLmRldmVsb3BtZW50LmxvY2FsJyA6ICcnfWAgfSlcblxuaW1wb3J0IHsgQ2xpZW50LCBJbnRlbnRzQml0RmllbGQgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IENvbW1hbmRLaXQgfSBmcm9tICdjb21tYW5ka2l0JztcblxuaW1wb3J0IHsgam9pbiwgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICBpbnRlbnRzOiBbXG4gICAgSW50ZW50c0JpdEZpZWxkLkZsYWdzLkd1aWxkcyxcbiAgICBJbnRlbnRzQml0RmllbGQuRmxhZ3MuR3VpbGRNZW1iZXJzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5HdWlsZE1lc3NhZ2VzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5NZXNzYWdlQ29udGVudCxcbiAgXSxcbn0pO1xuXG5uZXcgQ29tbWFuZEtpdCh7XG4gIGNsaWVudCxcbiAgZXZlbnRzUGF0aDogam9pbihfX2Rpcm5hbWUsICdldmVudHMnKSxcbiAgY29tbWFuZHNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ2NvbW1hbmRzJyksXG59KTtcblxuY2xpZW50LmxvZ2luKHByb2Nlc3MuZW52LlRPS0VOKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxPQUFPLFlBQVk7QUFRbkIsU0FBUyxRQUFRLHVCQUF1QjtBQUN4QyxTQUFTLGtCQUFrQjtBQUUzQixTQUFTLE1BQU0sZUFBZTtBQUM5QixTQUFTLHFCQUFxQjtBQVY5QixRQUFRLElBQUksV0FBVyxRQUFRLElBQUksWUFBWTtBQUUvQyxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksWUFBWSxnQkFBZ0IsdUJBQXVCLEVBQUUsRUFBRTtBQUV0RixPQUFPLE9BQU8sRUFBRSxNQUFNLE9BQU8sUUFBUSxJQUFJLFlBQVksZ0JBQWdCLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztBQVFsRyxJQUFNLFlBQVksUUFBUSxjQUFjLFlBQVksR0FBRyxDQUFDO0FBRXhELElBQU0sU0FBUyxJQUFJLE9BQU87QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDUCxnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLE1BQU07QUFBQSxJQUN0QixnQkFBZ0IsTUFBTTtBQUFBLEVBQ3hCO0FBQ0YsQ0FBQztBQUVELElBQUksV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFlBQVksS0FBSyxXQUFXLFFBQVE7QUFBQSxFQUNwQyxjQUFjLEtBQUssV0FBVyxVQUFVO0FBQzFDLENBQUM7QUFFRCxPQUFPLE1BQU0sUUFBUSxJQUFJLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==