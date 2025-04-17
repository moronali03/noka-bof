module.exports = {
 config: {
	 name: "🌺",
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
 if (event.body && event.body.toLowerCase() === "🌺") {
 return message.reply({
 body: "     「“যে স্মৃতি ভুলে যেতে চাই, সেই স্মৃতিই যেন বারবার ফিরে আসে।”•\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALi」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/rh3VyVt.mp4","https://i.imgur.com/UwiVEeO.mp4","https://i.imgur.com/HhK1dPs.mp4","http://g-v1.onrender.com/WyDg1hrVN.mp4")
 });
 }
 }
}
