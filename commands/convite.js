const discord = require("discord.js")

const convite = new discord.MessageEmbed()
    .setColor('#FF1493')
    .setTitle('Convite Edita Aê!')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Convite de nossa loja!')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Convite Edita Aê!", value: "Olá cliente, você que visita a Edita Aê! **É um grande prazer tê-lo aqui conosco!**\n\nQuero compartilhar contigo algumas de nossas promoções, olha só!\n\nTemos os mais variados projetos para você  que almeja  expandir seus negócios e criar sua própria marca Fique à vontade! Temos  prazer em atendê-lo.\n\nVerifique com a equipe de designers, progamadores e editores da Edita Aê! e realize seus sonhos.\n\ **Logos**\n\ **Highlight Makers**\n\ **Twitch Designers**\n\ **Thumbnails**\n\ **Banners**\n\ **Personagens**\n\ **Bots para Discord**\n\ **WebDesign**\n\ **Marketing**\n\n                            https://discord.gg/Xgkxc8S"}
    )


module.exports = {
    name: 'convite',
    help: `Convite do servidor`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(convite)
        message.channel.send('**Convite Curto**\n\n**Logos**\n\n**Highlight Makers**\n\n**Twitch Designers**\n\n**Thumbnails**\n\n**Banners**\n\n**Personagens**\n\n**Bots para Discord**\n\n**WebDesign**\n\n**Marketing**\n\n                            https://discord.gg/Xgkxc8S')
        message.channel.send("@everyone")
    },
};