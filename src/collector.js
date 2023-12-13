// collector.js
const { ComponentType } = require('discord.js');
const { buttonRow } = require('./buttons');
// const { rowWithInput } = require('./input');

const createCollector = (msg, reply) => {
    const filter = (i) => i.user.id === msg.author.id;

    const collector = reply.createMessageComponentCollector({ 
        componentType: ComponentType.Button,
        filter,
    });

    collector.on('collect', async (interaction) => {
        if (interaction.customId === 'si') {
            await interaction.update({
                content: 'Muy bien!!',
                components: [],
            });
        } else if (interaction.customId === 'no') {
            await interaction.update({
                content: 'Seguro?',
                components: [buttonRow],
            });
        }
    });
};

module.exports = createCollector;