const fs = require("fs");
module.exports.config = {
  name: "seeting",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "seeting",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Sting")==0 || event.body.indexOf("Stng")==0 || event.body.indexOf("STNG")==0 || event.body.indexOf("Maal")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n ले बेटा जब तक सेटिंग ना होती इसको देख कर काम चला ले😜🤭",
        attachment: fs.createReadStream(__dirname + `/cache/Stng.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
