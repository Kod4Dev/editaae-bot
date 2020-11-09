const discord = require('discord.js');
const bot = new discord.Client();


const ticket = new discord.MessageEmbed()
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setTitle('Ticket Edita Aê!')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setColor('#8B0000')
    .addFields(
        {name: "Ticket", value: "Para abrir o seu ticket basta **REAGIR** abaixo"}
    );

module.exports = {
    name: "ticket",
    help: "Abertura de tickets",
    execute(message, args) {
        message.delete().catch(O_o => {});
        message.reply(ticket)
    }
}