module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [╔╝❮ ❯╚╗
━━━━━━━━━━━━━━━━━━━━━━
𝗡𝗔𝗠𝗘:𝐀𝐋𝐀𝐌𝐈𝐍
𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌
𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗜𝗦𝗛𝗔𝗟𝗠𝗔𝗥𝗜, 𝗠𝗜𝗥𝗣𝗨𝗥, 𝗞𝗨𝗦𝗛𝗧𝗜𝗔
𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄
𝐀𝐆𝐄: 17+
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝗦𝗜𝗡𝗚𝗟𝗘
𝐖𝐎𝐑𝐊: 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
𝐆𝐌𝐀𝐈𝐋: mdalaminhosen4847@gmail.com
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://facebook.com/MRALAMINXHOWDHURY
𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑:  পেম করলে দিবো 😛
𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: https://t.me/mdalaminxhowdhury
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801748473269
━━━━━━━━━━━━━━━━━━━━━━

Bot Prefix: ( / )
Bot Name: 𝐌𝐝 𝐀𝐥𝐚𝐦𝐢𝐧 𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲]`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hwLP4lF.mp4")
 });
 }
 }
}
