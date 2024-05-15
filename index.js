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
    .setState('☆₊˚⋆𝐅𝐞𝐦𝐦𝐞 𝐃𝐫𝐚𝐠𝐨𝐧𝐢𝐚₊˚⋆')
    .setName('Dragon Nymph')
    .setDetails(`𝘋𝘳𝘢𝘨𝘰𝘯 𝘘𝘶𝘦𝘦𝘯`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1075473281022447796/1240220875652075600/IMG_1642.gif?ex=6645c532&is=664473b2&hm=e720875bcb22cde3b9c186b578af684f51fa0c7eb81ecf86e9f54271337f86f1&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('˚₊⊹♡₊˚꒷꒦꒷') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1075473281022447796/1240220969927315527/IMG_1633.gif?ex=6645c549&is=664473c9&hm=225a6e7badc2a7969c0fcbacf3e8ff82ed785b1aedd81920d4d0e5494eea207b&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝑁𝑎𝑒𝑎𝑟𝑎♡') //Text when you hover the Small image
    .addButton('ೣ🌷 ໑ ִ 💗🎐','https://nymphibia.carrd.co/')
    .addButton('★☄🀄️💌','https://youtu.be/ArmDp-zijuc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
