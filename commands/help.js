const discord = require("discord.js");
const { validateID } = require("ytdl-core-discord");

const help = new discord.MessageEmbed()
    .setColor('#FF00FF')
    .setTitle('Comandos')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('__Todos nossos comandos abaixo:__ ')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name:`${process.env.TOKEN}sugestao`, value: "Para dar a sua sugestão no canal <#776013841246322708>"}

    )

module.exports = {
    name: "help",
    help: `Todos nossos comandos!`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(help)
    },
};