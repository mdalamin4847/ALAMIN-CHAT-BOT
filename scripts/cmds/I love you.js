module.exports = {
 config: {
	 name: "i love you",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "i love you") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_আলামিন❞࿐.❤️..\n❥︎----ღ᭄-বস ওহ তোমাকে \n❥︎----ღ᭄_ভালো বাসে❞࿐.🌹....\n❥︎---তুমি.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_তুমি হয়ে জাও আলামিন এর বউ❞࿐.🙂\n❥︎----ღ᭄_আলামিন বস বিয়ে করলে আমিও করতে পারবো😜 ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n🅰︎🅻︎🅰︎🅼︎🅸︎🅽︎」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/f6UJlxG.mp4")
 });
 }
 }
}
