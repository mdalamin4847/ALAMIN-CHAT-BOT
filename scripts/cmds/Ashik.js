module.exports = {
 config: {
	 name: "Ashik",
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
 if (event.body && event.body.toLowerCase() === "Ashik") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ᴬˢˢᴬᴸᴬᴹᴼᴸᴬᴵᴷᵁᴹ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.🌴.\n❥ md αlαmín chσwdhurч\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐌𝐝 𝐀𝐥𝐚𝐦𝐢𝐧 𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/YUeM5D2.mp4")
 });
 }
 }
}
