const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { Guilds, GuildMembers, DirectMessages } = GatewayIntentBits;
const { Channel, GuildMember, Message, User, Reaction } = Partials;
const client = new Client({ intents: [ Guilds, GuildMembers, DirectMessages], partials: [Channel, GuildMember, Message, User, Reaction] });

client.once('ready', () => {
  console.log('Bot Ligado');
});

client.login("MTA1MTE2ODU4MzM5MDA3MjkwMw.GJSBY7.dWrluP0046CS0Utmb7yZxQFi_9coMIFKOLqdmY");