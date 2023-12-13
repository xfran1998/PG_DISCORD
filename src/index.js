// index.js
const { Client, IntentsBitField } = require('discord.js');
const quinto = require('./commands/utility/quinto.js');
const quizz = require('./commands/utility/quizz.js');
const createCollector = require('./collector');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.once('ready', (c) => {
  console.log(`👌 Logged in as ${c.user.tag}!`);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  

  // if (msg.content === '/5') {
  //   await quinto.execute(msg);
  // }

  // const reply = await msg.reply({
  //   content: 'Nombre del quinto?',
  //   components: [buttonRow],
  // });

  // createCollector(msg, reply);
});


client.on('interactionCreate', async interaction => {
  console.log("interactionCreate");
  if (!interaction.isCommand()) return;
  
  const { commandName } = interaction;
  console.log(commandName);

  if (commandName === 'quinto') {
    await quinto.execute(interaction);
    return;
  }
  

  if (commandName === 'quizz') {
    await quizz.execute(interaction);
  }
  
  // if (commandName === 'ping') {
  //     await quinto.execute(interaction);
  // }
});

client.login(TOKEN);