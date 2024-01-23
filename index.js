const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1142516638852321280')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('☆₊˚⋆𝓣𝓱𝓮 𝓞𝓻𝓲𝓰𝓲𝓷𝓪𝓵 𝓢𝓲𝓷₊˚⋆')
    .setName('Nymph')
    .setDetails(`ɓɓƎ pǝɥɔʇǝɹM ǝɥ⊥`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1075473281022447796/1187142060571119656/3A327B24-BC7A-4D28-9BB8-E1D6412706EE.gif?ex=6595cf33&is=65835a33&hm=fb513dffa50f491bd9495eb33208921df1dfb9a7d18fe54034bde90c2edb878c&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('˚₊⊹♡₊˚꒷꒦꒷') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1075473281022447796/1187142061460291624/702BBB02-1C81-4657-B844-132F91954551.gif?ex=6595cf33&is=65835a33&hm=88544f19fe1b1d87020aa43b908dada21eaf52f03f42d5945337bf83895a993a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝑁𝑎𝑒𝑎𝑟𝑎♡') //Text when you hover the Small image
    .addButton('ೣ🌷 ໑ ִ 💗🎐','https://nymphibia.carrd.co/')
    .addButton('★☄🀄️💌','https://youtu.be/ArmDp-zijuc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
