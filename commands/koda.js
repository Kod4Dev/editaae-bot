const discord = require('discord.js')
const bot = new discord.Client();

const koda = new discord.MessageEmbed()
    .setTitle('Developer - Kod4')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setDescription('Será um sonhador?')
    .setColor('#FF0000')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Sobre", value: "Meu nome é Arthur Henrique Eichenberg, tenho 18 anos e moro em Santa Catarina;\n\nAtuo na **área de marketing** e estou começando a atuar na **área de Programação**, na qual sempre fui apaixonado" }
    )

module.exports = {
    name: "koda",
    help: "Sobre a Equipe - Kod4",
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(koda)
    }
}