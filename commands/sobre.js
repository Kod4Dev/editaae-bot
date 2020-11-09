const discord = require("discord.js")

const apresentation = new discord.MessageEmbed()
    .setColor('#FF4500')
    .setTitle('Apresentação')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('Sobre a loja e o seu futuro!')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: '*Nossa Edita Aê!*', value: `Somos a empresa Edita Aê! e estamos no mercado há quatro anos e nosso lema é atuar sempre com muita dedicação, responsabilidade, respeito e o carinho que o cliente merece.\n\nPara isso contamos com uma equipe de ponta, composta por 4 profissionais dos mais modernos e qualificados do mercado, para realização e agilidade dos serviços.\nFornecemos os melhores serviços de design, edição de vídeos e programação.\n\n*Nossa equipe Edita Aê tem o imenso prazer de firmar uma parceria com você.*\n\nPara saber mais sobre nossos serviços __*ligue para*__ **(73)999162075**, __*Instagram*__ **@Edita_ae** ou  logo em breve  entre em contato pelo nosso site:\n\nAtenciosamente,\n\n__*Equipe Edita Aê!*__.`}
    )

module.exports = {
    name: 'sobre',
    help: `Sobre a Loja!`,
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(apresentation)
    },
};