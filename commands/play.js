const discord = require("discord.js");
const bot = new discord.Client();
const search = require('yt-search');
const ytdl = require("ytdl-core-discord")

const execute = async (bot,msg,args) => {
    const s = args.join(" ");
    try {
        search(s,(err,result) => {
            if(err) {
                throw err;
            }else if(result && result.videos.length > 0) {
                    const song = result.videos[0];
                    playSong(bot, msg, song);
                } else {
                    return msg.reply("Desculpe, não encontrei o que desejava");
                }
        });
    } catch(e){
        console.error(e);
    }
};

const playSong = (bot, msg, song) => {
    let queue = bot.queues.get(msg.member.guild.id);
    if(!song) {
        if(queue) {
            queue.connection.disconnect();
            bot.queues.delete(msg.member.guild.id);
        }
    }
    if(!msg.member.voice.channel) {
        return msg.reply("Você precisa estar em um canal de voz para reproduzir sua música");
    }
    if(!queue) {
        const conn = msg.member.voice.channel.join();
        queue = {
            volume: 10,
            connection: conn,
            dispatcher: null,
            songs: [songs]
        }
        queue.dispatcher =  queue.connection.play(ytdl(song.url, {highWaterMark: 1 << 25, filter: "audioonly"}), {
            type: "opus",
        });
        queue.dispatcher.on("finish",() => {
            queue.songs.shift();
            playSong(bot,msg,queue.songs[0]);
        })
        bot.queues.set(msg.member.guild.id,queue);
    } else {
        queue.song.push(song);
        bot.queues.set(msg.member.guild.id);
    }
};
module.exports = {
  name: "play",
  help: "Reproduz a música desejada no canal atual do usuário",
  execute,
  playSong
};