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
𝗡𝗔𝗠𝗘: BOSS~ASHIK
𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌
𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗧𝗔𝗥𝗔𝗞𝗔𝗡𝗗𝗜, 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥
𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄
𝐀𝐆𝐄: 17+
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝗦𝗜𝗡𝗚𝗟𝗘
𝐖𝐎𝐑𝐊: 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
𝐆𝐌𝐀𝐈𝐋: bossagor745@gmail.com
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL 
𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑:  পেম করলে দিবো 😛
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+881647711001
𝐈𝐌𝐎: 01647711001
𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: @DXAshik
━━━━━━━━━━━━━━━━━━━━━━

Bot Prefix: ( / )
Bot Name: ASHIK~BOT]`,
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/465802677_8194201450683666_3022630170231734073_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeHCSr-_7H_4qjVU_azC1TDap6_Tefdcg-Wnr9N591yD5abKjbhaW7R-42PbfERM-9Mfg7tCC4ewDxjKCFQyIgKG&_nc_ohc=vLgvSmngNS4Q7kNvgGcdWgX&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=A8oTF3NQfyULC1THckKr8Ps&oh=03_Q7cD1QF3hUXWofiSC40mayepk7cGrkb_mYilVmpu13Lo2HlDsA&oe=673F7CBB&dl=1")
 });
 }
 }
}
