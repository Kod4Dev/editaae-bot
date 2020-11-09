const discord = require("discord.js")

const parceria = new discord.MessageEmbed()
    .setColor('#00FF00')
    .setTitle('Parcerias!')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Para mais informações entre em contato com nosso DEV!')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Planos", value:"• Semanal tem direito a **2 @everyone**/semana\n• Mensal tem direito á **3 @everyone**/semana"},
        {name: "SEMANAL💵", value: "R$15,00", inline: true},
        {name: "MENSAL💵", value: "R$30,00", inline: true}
    )

module.exports = {
    name: 'parceria',
    help: `Todos os valores da Loja`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(parceria)
    },
};