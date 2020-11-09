const discord = require('discord.js');
const bot = new discord.Client();

module.exports = {
    name: "fb",
    description: "Feedback de clientes",
    execute(message, args) {
        message.delete();
        const content = args.join(" ");

        if (!args[0]) {
            return message.channel.send(`${message.author.username}, nos passe o seu feedback!`)
        } else if (content.length > 1000) {
            return message.channel.send(`${message.author.username}, forneça um feedback de no máximo 1000 caractéres!`)
        } else {
            var canal = message.guild.channels.cache.get("756582330759512087")
            const msg = canal.send (
                
                feedback = new discord.MessageEmbed()
                .setColor('#FFD700')
                .setAuthor(`${message.author.username} Feedback`, `${message.author.displayAvatarURL(dynamic = true, size = 2048)}`)
                .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
                .setTimestamp()
                .addField(content, `feedback registrado!`)
            );
            message.channel.send(`Obrigado pelo feedback <@${message.author.id}>`)
        }
    }
}

