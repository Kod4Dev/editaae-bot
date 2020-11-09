const discord = require("discord.js")

const preco = new discord.MessageEmbed()
    .setColor('#00FFFF')
    .setTitle('Preços da Edita Aê!')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('__Nossos preços podem variar de valor caso o projeto será mais complicado__ ')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: 'Preços Avulsos', value: `*Webcam* - **R$30,00**\n*Webcam Animada* - **R$50,00**\n*Telas (OFF, ON, VOLTO LOGO)* - **R$20,00**\n*Banners (YT, TWITCH, TT, LOJAS)* - **R$15,00**\n*Twitch Painels* - **R$5,00 Cada**\n*Twitch Transition* - **R$60**\n*Personagem* - **R$70,00**\n`},
        {name: 'Preços Diversos', value: `*Logo da sua empresa/Time* - **R$100**`},
    )


module.exports = {
    name: 'preco',
    help: `Todos os valores da Loja`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(preco)
    },
};