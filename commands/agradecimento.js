const discord = require("discord.js")

const agradecimento = new discord.MessageEmbed()
    .setColor('#800000')
    .setTitle('Agradecimento Edita AÊ!')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Agradecemos a sua compra! Espero que tenha gostado de nossos serviços!')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "Agradecimento", value: "Nós da **Edita Aê!• Store**:\n Agradecemos a sua compra, pedimos que você dê o seu feedback sobre a sua arte na sala de **FeedBacks**!\n\n __*Caso queira mais alguma arte Abra um novo Ticket*__!"}
    )


module.exports = {
    name: 'agradecimento',
    help: `Agradecimento de nossa loja!`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(agradecimento)
    },
};