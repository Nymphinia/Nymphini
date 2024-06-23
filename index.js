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
    .setState('☆₊˚ꨄ𝙫𝙖𝙡𝙚𝙣𝙩𝙞𝙣𝙚♢🪷ଓ₊˚⋆')
    .setName('Dragon Nymph')
    .setDetails(`❦𝙧𝙖𝙢𝙡𝙚𝙩𝙝𝙖𝙡☾✰`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1075473281022447796/1254344008898056202/the_png_is_linked_click_on_visitar_removebg_preview_V6.gif?ex=66792664&is=6677d4e4&hm=643b75e6d22c286761cc8a51280b2911c9548cdd7c274010ffe95f741ca540fd&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('˚₊⊹♡₊˚꒷꒦꒷') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1075473281022447796/1254369272650797108/ezgif-5-604d74c820.gif?ex=66793deb&is=6677ec6b&hm=e50a2829c5c4b208ea053362b0907d755e26e26868dde6c549348fb4ba69baa7&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝑁𝑎𝑒𝑎𝑟𝑎♡') //Text when you hover the Small image
    .addButton('ೣ🌷 ໑ ִ 💗🎐','https://nymphibia.carrd.co/')
    .addButton('★☄🀄️💌','https://youtu.be/ArmDp-zijuc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
