module.exports = {
 config: {
	 name: "🫡",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 2,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "🫡") {
 return message.reply({
 body: "     「যৌবনের তাড়নায় কোনো গুনাহ্ করিও না। কারণ যৌবন একদিন শেষ হয়ে যাবে\nকিন্তু গুনাহ্ ঠিকই রয়ে যাবে।💔\n\n\n—হযরত আলী (রাঃ)\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALi」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ZqXhkVn.mp4")
 });
 }
 }
}
