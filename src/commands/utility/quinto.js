const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");

const planos = [
  "cañon",
  "recolector",
  "misil"
];

const mejoras = [
  "potente",
  "normal",
  "duradero"
];

const sistemas = [
  "vega",
  "antares",
  "geminis"
]


const questionRow = (questions) => {
    return new ActionRowBuilder().addComponents(
        questions.map((question, index) => {
            return new ButtonBuilder()
                .setCustomId(index.toString())
                .setLabel(question)
                .setStyle("Primary");
        })
    );
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quizz")
    .setDescription("Responde bien las preguntas"),
  async execute(interaction) {
    let score = 0;
    let incorrectas = [];
    let index = 0;

    await interaction.reply({
      content: quizzGame[index].titulo,
      components: [questionRow(quizzGame[index].respuestas)],
    });

    const collector = interaction.channel.createMessageComponentCollector({
      time: 150000,
    });

    collector.on("collect", async (i) => {     
      console.log(`index: ${index}`);
      const userInteraction = i.member.nickname;
      
      console.log(userInteraction);

        if (i.customId == quizzGame[index].correcta) score++;
        else incorrectas.push(i.customId);
        
        index++;

        if (index === quizzGame.length) {
            const user = interaction.user;

            await i.update({
                content: `${user} ha acertado ${score} ${score === 1 ? "pregunta" : "preguntas"}`,
                components: [],
            });

            collector.stop();

            return;
        }
        i.update({ content: quizzGame[index].titulo, components: [questionRow(quizzGame[index].respuestas)] });
    });
      
    // collector.on("end", async (collected) => {
    //   await interaction.followUp({
    //     content: `Has acertado ${score} preguntas`,
    //     ephemeral: true,
    //   });
    // });
  },
};
