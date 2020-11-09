const discord = require('discord.js');
const bot = new discord.Client();

module.exports ={ 
    name:"news",
    help: "Enviar todas as novidades!",
    execute(message, args) {
    message.delete().catch(O_o => {});
    message.channel.send('Boa Noite Pessoal, tudo certo com vocês??\nSou o Bot da Edita Aê! espero sempre poder ajudar a todos!\n\n**Temos novidades aqui no nosso discord.**\n→ A sala <#765968717182926868> fala um pouco de cada um de nossa equipe!\n\n→ Outra sala é a <#765968716633604129>, lá temos todas as regras do nosso servidor!\n\nPara qualquer dúvida referente a preços ou a qualquer outra dúvida, abra o seu ticket → <#756594892360122498>\n\n                 Agradecemos a compreensão - **Equipe Edita Aê!**')
    message.channel.send('@everyone')
    }
}