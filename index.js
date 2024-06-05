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
    .setState('☆₊˚⋆𝐘𝐨-𝐘𝐨 𝐌𝐚𝐬𝐭𝐞𝐫♡ଦ🪷ଓ₊˚⋆')
    .setName('Dragon Nymph')
    .setDetails(`𝘼𝙧𝙘𝙖𝙣𝙖: 𝙃𝙤𝙥𝙚✰`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1075473281022447796/1248005119887544330/IMG_5988.gif?ex=666216d7&is=6660c557&hm=158260c4aa807b48a1f3a5d2a6b75af9e7e627554de2c75c6d89d5583d0f73bf&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('˚₊⊹♡₊˚꒷꒦꒷') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1075473281022447796/1248004960273301504/IMG_1976.gif?ex=666216b1&is=6660c531&hm=9e4e97f3cb936b2cbdee926f6e11292c1be85d2502a6af7cbadd915006de97bd&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝑁𝑎𝑒𝑎𝑟𝑎♡') //Text when you hover the Small image
    .addButton('ೣ🌷 ໑ ִ 💗🎐','https://nymphibia.carrd.co/')
    .addButton('★☄🀄️💌','https://youtu.be/ArmDp-zijuc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
