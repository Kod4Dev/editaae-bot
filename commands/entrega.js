const discord = require("discord.js")

const entrega = new discord.MessageEmbed()
    .setColor('#A020F0')
    .setTitle('**Olá tudo certo?**')
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setDescription('__Já que você sabe nossos preços, veja nosso prazo de entrega e métodos de pagamento__')
    .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .addFields(
        {name: "```PRAZO DE ENTREGA```", value: "O nosso prazo de entrega é de até **4 dias úteis**, lembrando que só é começado o processo após a **confirmação de pagamento**\n\n"},
        {name: "```MÉTODOS DE PAGAMENTO```\n", value: "__Esses são nosso métodos de pagamento__\n"},
        {name: "<:transf:758041710516371636>", value: "Paypal", inline: true},
        {name: "<:transf:758041710516371636>", value: "Transferência", inline: true},
        {name: "💰", value: "Depósito", inline: true},
    )

module.exports = {
    name: 'entrega',
    help: "tempo de entrega e métodos de pagamento",
    execute (message, args) {
        message.delete().catch(O_o => {})
        message.reply(entrega)
    },
};