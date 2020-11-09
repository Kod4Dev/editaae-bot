const discord = require('discord.js');
const { execute } = require('./help');
const bot = new discord.Client();
const adm = new discord.MessageEmbed()

    .setColor('#00FA9A')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Commands para todos que forem da Staff utilizarem')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setTitle('Commands para a Staff!')
    .addFields (
        {name: `${process.env.PREFIX}preco`, value: "*Preço Avulso da Edita Aê*", inline: true},
        {name: `${process.env.PREFIX}pack`, value: "*Preço dos packs da Edita Aê*", inline: true},
        {name: `${process.env.PREFIX}entrega`, value: "Tempo de entrega e Métodos de pagamento", inline: true},
        {name: `${process.env.PREFIX}agradecimento`, value: "Agradecimento sobre a compra", inline: true},
    )

module.exports = {
    name: "adm",
    help: "Comandos para a Administração da Edita Aê!",
    execute (message, args)  {
        message.delete().catch(O_o => {})
        message.reply(adm)
        message.channel.send('<@&756574702696136834>Qualquer dúvida tratar comigo!')
    }
}