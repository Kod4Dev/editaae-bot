const discord = require('discord.js');
const bot = new discord.Client();

const mavi = new discord.MessageEmbed()
    .setAuthor('Designer - MAVI')
    .setColor('#32CD32')
    .setDescription('Dreamer and Conquist GIRL')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Sobre", value: "Sou Mª Vitória mas pode me chamar de Mavi!\nTenho 19 anos e atuo na área de Ilustração, atualmente estou entrando no mundo do Design o qual sempre tive interesse e admiração."}
)

module.exports = {
    name: "mavi",
    help: "Sobre a Maria Vitória",
    execute(message, args) {
        message.delete().catch(O_o => {})
        message.reply(mavi)
    }
}