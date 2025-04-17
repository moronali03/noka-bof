module.exports = {
 config: {
	 name: "🕌",
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
 if (event.body && event.body.toLowerCase() === "🕌") {
 return message.reply({
 body: "     「 ১“সুবহানাল্লাহ”(سبحان الله )\n২“আলহামদুলিল্লাহ”(الحمد لله)\n৩“লা ইলাহা ইল্লাল্লাহ”(لأ إله إلا الله)\n৪.“আল্লাহু আকবার”(الله اكبر)\n৫.“আস্তাগফিরুল্লাহ”(استغفر الله)\n৬.“আল্লাহুম্মাগফিরলি”(اللهم اغفر لي)\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALi\n\n」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1X5Hf9d.mp4")
 });
 }
 }
}
