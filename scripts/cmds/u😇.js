module.exports = {
 config: {
	 name: "😇",
	 version: "1.0",
	 author: "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function() {
	 const expectedAuthor = "MORON-ALI";
	 if (this.config.author !== expectedAuthor) {
		 throw new Error("Unauthorized change detected in the author field. Please restore the original author.");
	 }
 },

 onChat: async function({ event, message }) {
	 if (event.body && event.body.toLowerCase() === "😇") {
		 const videoLinks = [
			 "https://i.imgur.com/5YUMuf6.mp4",
			 "https://i.imgur.com/UwiVEeO.mp4",
			 "https://i.imgur.com/HhK1dPs.mp4",
			 "https://i.imgur.com/DoH3GUk.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「🌻༉༊𝗬𝗼𝘂 𝗔𝗿𝗲 𝗦𝗼𝗺𝗲 𝗢𝗻𝗲 𝗖𝗹𝗼𝘀𝗲 𝗧𝗼 𝗠𝗲 𝗙𝗮𝗿 𝗔𝘄𝗮𝘆ღ༊🥀🥰\n\n🖤🌸༊আপনি༊আমার༊দুরে༊থাকা༊ভিষণ༊কাছের༊কেউ༊ღ࿐😽\n\n••\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALI」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
