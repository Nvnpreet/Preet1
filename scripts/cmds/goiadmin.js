module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100078833520452") {
		var aid = ["100078833520452"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["मेरे बॉस 𝐉𝐔𝐋𝐌𝐈 को क्यू बुला रहे हो","मेरे बॉस 𝐉𝐔𝐋𝐌𝐈 𝐉𝐀𝐀𝐓 को बार बार डिस्टर्ब मत करो 😒 ","पागल हो कया तुम मेरे बॉस 𝐉𝐔𝐋𝐌𝐈 को मेंशन मत करो 🙄","𝐉𝐔𝐋𝐌𝐈 बॉस अभी अपनी वाइफ के साथ बीजी है बाद मे बात करे गे 🤧"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
