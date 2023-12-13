// buttons.js
const { ButtonBuilder, ButtonStyle, ActionRowBuilder, MessageActionRow, MessageButton, MessageSelectMenu, MessageInput } = require('discord.js');

const firstButton = new ButtonBuilder()
    .setCustomId('si')
    .setLabel('Por supuesto')
    .setStyle(ButtonStyle.Primary);

const secondButton = new ButtonBuilder()
    .setCustomId('no')
    .setLabel('No')
    .setStyle(ButtonStyle.Danger);

const buttonRow = new ActionRowBuilder()
    .addComponents(firstButton, secondButton);

module.exports = { firstButton, secondButton, buttonRow};
