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
    .setState('☆₊˚ꨄBelobog♢🪷ଓ₊˚⋆')
    .setName('Dragon Nymph')
    .setDetails(`❦Koleda☾✰`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1075473281022447796/1262864853631111289/ezgif-5-c31adef562.gif?ex=6698260c&is=6696d48c&hm=3ead5eb6de95c9e7df70c3227bcba16a889ca6f1a54f350473aed55445255f10&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('˚₊⊹♡₊˚꒷꒦꒷') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1075473281022447796/1262860988550479872/85c04d7b2378ffd4d8e07eb13bd67c66_3740804408794116441.gif?ex=66982272&is=6696d0f2&hm=bb031c36e6981138e64d04b703046b07031a0c2bdcd9f759e5ca8477399b2101&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝑁𝑎𝑒𝑎𝑟𝑎♡') //Text when you hover the Small image
    .addButton('ೣ🌷 ໑ ִ 💗🎐','https://nymphibia.carrd.co/')
    .addButton('★☄🀄️💌','https://youtu.be/ArmDp-zijuc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
