require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

Client.on('ready', () => {
    console.log("The Bot is online!");
})

client.login(process.env.TOKEN);