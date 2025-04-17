module.exports = {
 config: {
	 name: "😀",
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
	 if (event.body && event.body.toLowerCase() === "😀") {
		 const videoLinks = [
			 "https://i.imgur.com/WyaG71o.mp4",
			 "https://i.imgur.com/YmtWqZJ.mp4",
			 "https://i.imgur.com/W0ULzfg.mp4",
			 "https://i.imgur.com/YfjB8ak.mp4",
			 "https://i.imgur.com/NLXeCRw.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「🦋🥀°এই শহরে সবার’ই কষ্ট আছে.!🙂 °কেউ কেউ প্রকাশ করে,আর কেউ হাসির মাধ্যমে উড়িয়ে দেয়.!🙂🖤\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nMORON-ALI\n」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
