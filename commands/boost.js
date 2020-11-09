const discord = require("discord.js")

const boost = new discord.MessageEmbed()
    .setColor('#FFF5EE')
    .setTitle('Parceria with Boost')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Para mais informações sobre a parceria com o BOOST entre em contato com o DEV')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Regras", value: "• Cada um dos boost você terá a possibilidade de divulgar sua **Loja/Insta/Empresa/Discord/Cidade**\n\n• Caso abuse de sua possibilidade, tomara um ban de __*48h*__!\n\n• Use a sua divulgação da maneira que quiser, porém com conciência!"},
        {name: "**UM BOOST**", value: "Divulgação de **2 vezes/mês", inline: true},
        {name: "**DOIS BOOST**", value: "Divulgação de **4 vezes/mês**"}
    )

module.exports = {
    name: 'boost',
    help: `Valores do boost de nossa Loja!`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(boost)
        message.channel.send("__*Leiam as regras antes de qualquer coisa para ficar ciente de qualquer dúvida!*__\nCaso tenha dúvida entre em contato com o DEV\n@everyone")
    },
};