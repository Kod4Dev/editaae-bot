const discord = require('discord.js');
const bot = new discord.Client();

module.exports = {
    name: "sugestao",
    description: "Sugestão de clientes",
    execute(message, args) {
        message.delete();
        const content = args.join(" ");

        if (!args[0]) {
            return message.channel.send(`${message.author.username}, nos passe o seu feedback!`)
        } else if (content.length > 1000) {
            return message.channel.send(`${message.author.username}, forneça um feedback de no máximo 1000 caractéres!`)
        } else {
            var canal = message.guild.channels.cache.get("776013841246322708")
            const msg = canal.send (
                
                sugestao = new discord.MessageEmbed()
                .setColor('#00FFFF')
                .setAuthor(`${message.author.username} Sugestão`, `${message.author.displayAvatarURL(dynamic = true, size = 2048)}`)
                .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
                .setTimestamp()
                .addField(content, `Sugestão registrada!`)
            ).then(msg=> {
                msg.react('✔️'), 
                msg.react("❎")});

            message.author.send(new discord.MessageEmbed()
            .setTitle(`Obrigado pela sugestão ${message.author.username}`)
            .setColor('#00FFFF')
            .setAuthor('Edita Aê!• Store', 'https://i.ibb.co/gdWfTSx/logo.png')
            .setThumbnail('https://i.ibb.co/gdWfTSx/logo.png')
            .addField(`Veja sobre sua Sugestão no Canal`, `<#775857044116865034>`)
            .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
            .setTimestamp()
            )
        }         
    }
}

