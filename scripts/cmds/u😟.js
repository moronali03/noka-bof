module.exports = {
 config: {
	 name: "😟",
	 version: "1.0",
	 author: "MORON-ALI",
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
	 if (event.body && event.body.toLowerCase() === "😟") {
		 const videoLinks = [
			 "https://i.imgur.com/zIcBUbz.mp4",
			 "https://i.imgur.com/akuim9V.mp4",
			 "https://i.imgur.com/Wvr0KXh.mp4",
			 "https://i.imgur.com/fOyPFmu.mp4",
			 "https://i.imgur.com/rKZSVGN.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「🦋🥀°কথা তোমার উদ্দেশ্যে\n\nমজা করি হাসি তোমায় হাসাই ,তাই হয়তো তুমি আমাকে বুঝ না🙂।\nখারাপ কিন্তু আমারও লাগে🙂। চিৎকার করে যখন মানুষ কান্না করতে না পারে \nতখন চুপ হয়ে যায়😅।\n\nহাসির আড়ালে দুঃখ লুকায় 🫰🏽😌!🙂🖤\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆MORON-ALI☆\nTHE DUCK」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
