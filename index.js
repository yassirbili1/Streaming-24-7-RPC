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
    timeZone: 'Africa/Casablanca', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setApplicationId('1292978155581341766')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/alex_jbad') //Must be a youtube video link 
    .setState('₊ ⁺✩ 𝟑𝐈𝐂𝐇 𝐎𝐔 𝐍𝐒𝐀 😁💪')
    .setName('! 𝐀 𝐋 𝐄 𝐗 🔱')
    .setDetails(`₊ ⁺✩ 𝟑𝐈𝐂𝐇 𝐎𝐔 𝐍𝐒𝐀 😁💪 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1238885204270256139/1419276059177648138/lv_7377528269479922951_20240928225126.gif?ex=68d12b55&is=68cfd9d5&hm=0e7827d0c59b0614cc0874227596e0b080f20b7a0688944897e06c8561297dc3&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('₊ ⁺✩ 𝐋𝐚 𝐟𝐚𝐦𝐢𝐥𝐢𝐚 𝐄𝐬 𝐓𝐨𝐝𝐨𝐬 🔱') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1238885204270256139/1419276066274545665/7177-red-verify.gif?ex=68d12b57&is=68cfd9d7&hm=cbcd54ff13e33fc1f501525c281722974c8c0d76f639937f2cb9498ab05a8413&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('𝗩𝗲𝗿𝗶𝗲𝗳𝗲𝗱') //Text when you hover the Small image
    .addButton('Github', 'https://github.com/yassirbili1')
    .addButton('ALX', 'https://discord.gg/jD4PGPWRur');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `! 𝐀 𝐋 𝐄 𝐗 🔱 [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);