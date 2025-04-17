module.exports = {
 config: {
	 name: "😘",
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
 if (event.body && event.body.toLowerCase() === "😘") {
 return message.reply({
 body: "     「কিরে লুচ্চা \n এত চুম্মাচুম্মি করিস কেনো 🐸 \n\n এই নে তোর চিপায় চাপায় অলিগলি,নরম জায়গায় , তোর কালো ওই জায়গায় উম্মাহ 🫦🥵🤮\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALi」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/2kaxerV.mp4")
 });
 }
 }
}
