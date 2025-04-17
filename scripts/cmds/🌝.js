module.exports = {
 config: {
	 name: "🌝",
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
 if (event.body && event.body.toLowerCase() === "🌝") {
 return message.reply({
 body: "     「  اللهم صل على سيدنا محمد وعلى آل سيدنا محمد وعلى أصحاب سيدنا محمد وعلى أنصار سيدنا محمد وعلى أزواج سيدنا محمد وعلى ذرية سيدنا محمد وسلم تسليمًا كثيرًا\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆MORON-ALi☆\n\n 」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/VtQvoeK.mp4")
 });
 }
 }
}
