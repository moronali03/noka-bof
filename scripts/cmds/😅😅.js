module.exports = {
 config: {
	 name: "😅😅",
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
 if (event.body && event.body.toLowerCase() === "😅😅") {
 return message.reply({
 body: "     「  😅💔🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆MORON-ALi",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/2p8Gq3a.mp4")
 });
 }
 }
}
