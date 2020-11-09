const discord = require('discord.js');
const bot = new discord.Client();

const joao = new discord.MessageEmbed ()
    .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setColor('#87CEFA')
    .setDescription('Construtor de sonhos?')
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setTitle('CEO - Pelitz')
    .addFields(
        {name: "Sobre", value:"O papel do CEO é deixar um legado. Se ele não fizer isso, não teve um desempenho completo;\nAssegura João Pedro, 18, presidente da Edita Aê, empresa de Design Gráfico, Edição de Vídeos e Programação. Ele acredita que todo profissional tem que pensar no impacto de suas ações na sociedade e na empresa em que trabalha."}
)

module.exports = {
    name: "joao",
    help: "Sobre o João",
    execute(message, args) {
        message.delete().catch(O_o => {})
        message.reply(joao)
    }
}