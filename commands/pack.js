const discord = require("discord.js")

const pack = new discord.MessageEmbed()
    .setColor('#EE82EE')
    .setTitle('Preços da Edita Aê!')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('__Nossos preços podem variar de valor caso o projeto será mais complicado__ ')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "```Packs para Twitch```\n", value: "__*Overlay Simples*__ *(webcam)* - **R$30,00**\n\n__*Overlay Intermediário*__ *(Webcam, VOLTO LOGO, Personagem)* - **R$120,00**\n\n__*Overlay Gold*__ *(Animated Webcam, Telas (ON, OFF, VOLTO LOGO) e Personagem)* - **R$180,00**\n\n__*Overlay Edita Aê*__ *(Animated Webcam, Telas (ON, OFF, VOLTO LOGO), Twitch Painels, Trasition, Personagem)* - **R$285,00** "}
    )


module.exports = {
    name: 'pack',
    help: `Todos os valores da Loja`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(pack)
    },
};