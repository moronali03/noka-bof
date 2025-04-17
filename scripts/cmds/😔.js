module.exports = {
 config: {
	 name: "😔",
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
 if (event.body && event.body.toLowerCase() === "😔") {
 return message.reply({
 body: "     「 ক্ষমা করে দিও আমাকে..!!🙂\n\n তোমার জীবনে ভালো মানুষ হতে পারলাম না.....😞\n\n কিন্তু একদিন আমার নাম'টা মনে পড়লে ঠিক'ই বলবা,\nমানুষ'টা সবার থেকে ভিন্নি ছিলো..!!😅💔🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALi」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/wPL3fTy.mp4")
 });
 }
 }
}
