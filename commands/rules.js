const discord = require('discord.js');
const bot = new discord.Client();

const rules = new discord.MessageEmbed()
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setColor('#FFFF00')
    .setDescription('Leia com atenção para depois não vir reclamar!')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setTitle('Regras | Rules')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .addFields(
        {name: "Regras! :flag_br:", value: "• Não xingar;\n• Não cometa preconceito;\n• Não poste material **duvidoso**;\n• Não chame alguém da Equipe no **PV**;\n• Não cometa **SPAM**;\n• Qualquer dúvida abra um ticket;\n• Não marque sem necessidade."},
        {name: "Rules! :flag_us:", value: "• Do not swear;\n• Don't Be Racist;\n• Do not post **dubious** material;\n• Do not call someone from the team in **PV**;\n• Do not commit **SPAM**;\n• Any doubt open a ticket;\n• Do not score without need."}
)
module.exports = {
    name: "rules",
    help: "Regras do servidor",
    execute(message, args) {
        message.delete().catch(O_o => {});
        message.reply(rules)
        message.channel.send('@everyone Nossas regras foram citadas acima!\nCaso de alguma dúvida entrar em contato com o <@&756578036983529522> ou com <@&756574702696136834>\nAgradeço a atenção de todos!')
    }
 }