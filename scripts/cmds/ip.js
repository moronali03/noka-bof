module.exports = {
	config: {
		name: "ip",
		version: "1.0",
		author: "moron",
		countDown: 5,
		role: 0,
		category: "No Prefix",
		category: "reply",
		description: {
			vi: "সার্ভারের তথ্য দেখাবে",
			en: "Display server information"
		},
		category: "info",
		guide: {
			vi: "   {pn}",
			en: "   {pn}"
		}
	},

	onStart: async function ({ message, event, args }) {
		const replyMessage = `╭━━━━━━━━━━━━━━━━━╮
┃  🌊🔥 *Trident MC* 🔥🌊
┃━━━━━━━━━━━━━━━━━
┃ 🎮 *Java Edition:*  
┃ 📍 sphere.spinex.cloud:19467  
┃━━━━━━━━━━━━━━━━━
┃ 🎮 *Bedrock Edition:*  
┃ 📍 IP: sphere.spinex.cloud  
┃ 📍 Port: 19467  
┃━━━━━━━━━━━━━━━━━
┃ 👑 *Owner:* @Solus Boy  
┃ ⚔ *Admin:* @Md Tamim  
┃━━━━━━━━━━━━━━━━━
┃ 🚀 *মজা, অভিযান, এবং প্রতিযোগিতার জন্য প্রস্তুত হও!*  
┃ ✅ এখনই যোগ দাও এবং অ্যাডভেঞ্চার শুরু করো!  
╰━━━━━━━━━━━━━━━━━╯`;
		
		return message.reply(replyMessage);
	}
};