const discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");


dotenv.config();

const bot = new discord.Client({ws: {intents: ['GUILDS', 'GUILD_PRESENCES', 'GUILD_MESSAGES' ,'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS',  'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']}});
bot.commands = new discord.Collection();
bot.queues = new Map();

const commandFiles = fs
    .readdirSync(path.join("./commands"))
    .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    let activities = [
        `A loja do seus sonhos.`,
        `Criado por Kod4#0001`,
        `Desenvolva seu Bot conosco`,
        `Bots totalmente personalizado`,
        `${process.env.PREFIX}help para ver todos nossos comandos`
      ]
      i=0;
      setInterval(() => bot.user.setActivity(`${activities[i++ %
      activities.length]}`, {
        type: "WATCHING"
      }), 5000); // WATCHING, LISTEN, PLAYING, STREAMING //
      console.log(`O bot foi iniciado, com ${bot.users.cache.size} usuários e em ${bot.guilds.cache.size} servidores.`); 
});

bot.on("guildMemberAdd", member => {
    const welcomeMessage = new discord.MessageEmbed()
    .setImage('https://media.giphy.com/media/XH2SQ8gde4v4zLTtue/giphy.gif')
    .setColor('#8B0000')
    .setAuthor(`${member.user.username}`, `${member.user.displayAvatarURL(dynamic = true, size = 2048)}`)
    .setTitle(`Bem vindo ${member.user.username}`)
    .setDescription(`Para mais suporte, basta abrir o seu ticket!`)
    .setThumbnail(member.user.displayAvatarURL(dynamic = true, size = 2048))
    .addFields(
        {name: "Ajuda?", value: "Leia as <#765968716633604129> e abra o seu <#756594892360122498>"})
    .setFooter('Edita Aê!• Store | Todos os direitos reservados', 'https://i.ibb.co/gdWfTSx/logo.png')
    member.guild.channels.cache.get('766860014873739314').send(welcomeMessage);
    member.roles.add('757379195348451399')
})

bot.on("GUILD_MEMBER_REMOVE", (member, guild) => {
    member.guild.channels.cache.get('764251598440366169').send(member.user.username + ` Saiu do servidor ${guild.name}`)
})

bot.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
});

bot.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
});


bot.on("message", (msg) => {
    if(!msg.content.startsWith(process.env.PREFIX || msg.author.bot)) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();
    
try {
    bot.commands.get(command).execute(msg, args);
} catch(err) {
    return msg.reply("Ops ainda não conheço esse comando!!");
}
});

