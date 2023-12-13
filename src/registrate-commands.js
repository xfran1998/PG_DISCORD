require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "quinto",
    description: "Replies with Quinto!",
  },
  {
    name: "quizz",
    description: "Contesta a todas las respuestas!",
  },
];

async function createCommands() {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

createCommands();
