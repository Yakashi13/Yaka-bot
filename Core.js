require("./index.js");
require("./config.js");
require("./BotCharacters.js");
require("./Processes/welcome.js");

const { Collection, Function } = require("./lib");
const { isUrl } = Function;
const axios = require("axios");
const Func = require("./lib");
const chalk = require("chalk");
const { color } = require("./lib/color");
const os = require('os')

const cool = new Collection();
const { mk, mku, mkchar } = require("./Database/dataschema.js");
const prefix = global.prefa;

global.Levels = require("discord-xp");
Levels.setURL(mongodb);

console.log(color("\nDatabase 1 connected  !\n", "lime"));

console.log(color("\nDatabase 2 connected !\n", "lime"));

console.log(color("\nLoading please wait...\n", "yellow"));

console.log(color('\nDo not modify this bot on your own!!\nAsk Owner before you do..\n', 'red'))

module.exports = async (Miku, m, commands, chatUpdate, store) => {
  try {
    let { type, isGroup, sender, from } = m;
    let body =
      type == "buttonsResponseMessage"
        ? m.message[type].selectedButtonId
        : type == "listResponseMessage"
          ? m.message[type].singleSelectReply.selectedRowId
          : type == "templateButtonReplyMessage"
            ? m.message[type].selectedId
            : m.text;
    let prat =
      type === "conversation" && body?.startsWith(prefix)
        ? body
        : (type === "imageMessage" || type === "videoMessage") &&
          body &&
          body?.startsWith(prefix)
          ? body
          : type === "extendedTextMessage" && body?.startsWith(prefix)
            ? body
            : type === "buttonsResponseMessage" && body?.startsWith(prefix)
              ? body
              : type === "listResponseMessage" && body?.startsWith(prefix)
                ? body
                : type === "templateButtonReplyMessage" && body?.startsWith(prefix)
                  ? body
                  : "";

    const metadata = isGroup ? await Miku.groupMetadata(from) : {};
    const pushname = m.pushName; //|| 'NO name'
    const participants = isGroup ? metadata.participants : [sender];
    const groupAdmin = isGroup
      ? participants.filter((v) => v.admin !== null).map((v) => v.id)
      : [];
    const botNumber = await Miku.decodeJid(Miku.user.id);
    const isBotAdmin = isGroup ? groupAdmin.includes(botNumber) : false;
    const isAdmin = isGroup ? groupAdmin.includes(sender) : false;
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isOwner = global.owner.includes(m.sender);
    global.suppL = "https://chat.whatsapp.com/KLX59oSwhGWLCDNGshiwWv";

    const isCmd = body.startsWith(prefix);

    ////server uptime?///
    const uptimeValue = os.uptime();
    const uptime = `${Math.floor(uptimeValue / 3600)}h ${Math.floor(uptimeValue % 3600 / 60)}m ${Math.floor(uptimeValue % 60)}s`;
    //////
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || m.msg).mimetype || " ";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const budy = typeof m.text == "string" ? m.text : "";
    const args = body.trim().split(/ +/).slice(1);
    const ar = args.map((v) => v.toLowerCase());
    let text = (q = args.join(" "));
    const groupName = m.isGroup ? metadata.subject : "";
    const cmdName = prat
      .slice(prefix.length)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();

    const cmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      ) ||
      "";
    const icmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      );
    const mentionByTag =
      type == "extendedTextMessage" &&
        m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];

    if (!isCreator) {
      let checkban =
        (await mku.findOne({
          id: m.sender,
        })) ||
        (await new mku({
          id: m.sender,
          name: m.pushName,
        }).save());

      if (
        isCmd &&
        checkban.ban !== "false" &&
        budy != `${prefix}support` &&
        budy != `${prefix}supportgc` &&
        budy != `${prefix}owner` &&
        budy != `${prefix}mods` &&
        budy != `${prefix}mod` &&
        budy != `${prefix}modlist`
      )
        return m.reply(
          `You are *Banned* from using commands for *${checkban.reason}* from *${checkban.gcname}*`
        );
    }

    // ------------------------ Character Configuration (Do not modify this part) ------------------------ //

    let char = "0"; // default one
    let CharacterSelection = "0"; // user selected character

    let character = await mkchar.findOne({
      id: "1",
    });
    if (character) {
      CharacterSelection = character.seletedCharacter;
    } else {
      let newCharacter = new mkchar({
        id: "1",
        seletedCharacter: "0",
      });
      await newCharacter.save();
    }

    await mkchar
      .findOne({
        id: "1",
      })
      .then(async (res) => {
        if (res.seletedCharacter != char) {
          CharacterSelection = res.seletedCharacter;
        } else {
          CharacterSelection = char;
        }
      });

    let idConfig = "charID" + CharacterSelection;

    global.botName = global[idConfig].botName;
    global.botVideo = global[idConfig].botVideo;
    global.botImage1 = global[idConfig].botImage1;
    global.botImage2 = global[idConfig].botImage2;
    global.botImage3 = global[idConfig].botImage3;
    global.botImage4 = global[idConfig].botImage4;
    global.botImage5 = global[idConfig].botImage5;
    global.botImage6 = global[idConfig].botImage6;

    //------------------------------------------- Antilink Configuration --------------------------------------------//

    let checkdata = await mk.findOne({
      id: m.from,
    });
    if (!checkdata) {
      let newdata = new mk({
        id: m.from,
        antilink: "false",
      });
    }

    if (checkdata) {
      if (checkdata.antilink == "true" && !isBotAdmin) {
        await mk.updateOne({ id: m.from }, { antilink: "false" });
        Miku.sendMessage(m.from, { text: `Antilink has been *disabled* because I am not an admin anymore.` });
      }
      let mongoschema = checkdata.antilink || "false";
      if (m.isGroup && mongoschema == "true") {
        linkgce = await Miku.groupInviteCode(from);
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
          m.reply(
            `No action will be taken because you sent this group's link.`
          );
        } else if (budy.includes(`https://chat.whatsapp`)) {
          bvl = `Admin has sent a link so no issues.`;
          if (isAdmin) return m.reply(bvl);
          if (m.key.fromMe) return m.reply(bvl);
          if (isCreator) return m.reply(bvl);
          kice = m.sender;
          await Miku.groupParticipantsUpdate(m.from, [kice], "remove");
          await Miku.sendMessage(
            from,
            {
              delete: {
                remoteJid: m.from,
                fromMe: false,
                id: m.id,
                participant: m.sender,
              },
            },
            {
              quoted: m,
            }
          );
          await mk.updateOne(
            {
              id: m.from,
            },
            {
              antilink: "true",
            }
          );
          Miku.sendMessage(
            from,
            {
              text: `\`\`\`*Antilink System*\`\`\`\n\n@${kice.split("@")[0]
                } Removed for sending WhatsApp group link in this group! Message deleted.`,
              mentions: [kice],
            },
            {
              quoted: m,
            }
          );
        } else if (isUrl(m.text) && !icmd && !isAdmin && !isCreator) {
          await Miku.sendMessage(
            from,
            {
              delete: {
                remoteJid: m.from,
                fromMe: false,
                id: m.id,
                participant: m.sender,
              },
            },
            {
              quoted: m,
            }
          );
          m.reply(
            `Antilink is on ! To use any link related commands use my actual prefix ( ${prefix} ) ! \n\nExample : ${prefix}igdl <link> or ${prefix}ytmp4 <link>`
          );
        } else {
        }
      }
    }

    //---------------------------------- Self/public/Private mode Configuration ------------------------------------//

    let modSTATUS = await mku.findOne({
      id: m.sender,
    });
    const modStatus = modSTATUS ? modSTATUS.addedMods : "false";


    let botModeSet = await mkchar.findOne({
      id: "1",
    });
    var workerMode = "false";
    if (botModeSet) {
      workerMode = botModeSet.privateMode || "false";
      if (workerMode == "true") {
        if (
          !global.owner.includes(`${m.sender.split("@")[0]}`) &&
          modStatus == "false" &&
          isCmd &&
          m.sender != botNumber
        ) {
          console.log("\nCommand Rejected ! Bot is in private mode !\n");
          return;
        }
      }
      if (workerMode == "self") {
        if (m.sender != botNumber && isCmd) {
          console.log("\nCommand Rejected ! Bot is in Self mode !\n");
          return;
        }
      }
    }

    //-------------------------------------- Group CMD On/OFF Configuration ----------------------------------------//

    let botSwitchGC = await mk.findOne({
      id: m.from,
    });
    var botWrokerGC = "true";
    if (botSwitchGC) {
      botWrokerGC = botSwitchGC.botSwitch || "true";
      if (
        m.isGroup &&
        botWrokerGC == "false" &&
        !isAdmin &&
        !isOwner &&
        modStatus == "false" &&
        isCmd
      ) {
        return console.log(
          `\nCommand Rejected ! Bot is turned off in ${groupName} !\n`
        );
      }
    }

    //------------------------------------------- Chatbot Configuration ---------------------------------------------//

    let chatbotStatus = await mk.findOne({
      id: m.from,
    });
    var csts = "false";
    if (chatbotStatus) {
      csts = chatbotStatus.chatBot || "false";
      if (m.isGroup && csts == "true" && !icmd && !isCmd) {
        if (m.quoted) {
          if (m.quoted.sender == botNumber) {
            const botreply = await axios.get(
              `http://api.brainshop.ai/get?bid=174300&key=ugPE0tD90fafvu2N&uid=[uid]&msg=[${budy}]`
            );
            txt = `${botreply.data.cnt}`;
            setTimeout(function () {
              m.reply(txt);
            }, 2200);
          }
        }
      }
    }

    let PMchatBotStatus = await mkchar.findOne({
      id: "1",
    });
    var PMcsts = "false";
    if (PMchatBotStatus) {
      PMcsts = PMchatBotStatus.PMchatBot || "false";

      if (!m.isGroup && PMcsts == "true" && !icmd && !isCmd) {
        const botreply = await axios.get(
          `http://api.brainshop.ai/get?bid=174300&key=ugPE0tD90fafvu2N&uid=[uid]&msg=[${budy}]`
        );
        txt = `${botreply.data.cnt}`;
        setTimeout(function () {
          m.reply(txt);
        }, 2200);
      }
    }
    //--------------------------------------------- NSFW Configuration -----------------------------------------------//

    let nsfwstatus = await mk.findOne({
      id: m.from,
    });
    let NSFWstatus = "false";
    if (nsfwstatus) {
      NSFWstatus = nsfwstatus.switchNSFW || "false";
    }

    //---------------------------------------------- Group Banning Configuration --------------------------------------//

    let banGCStatus = await mk.findOne({ id: m.from });
    var BANGCSTATUS = "false";
    if (banGCStatus) {
      BANGCSTATUS = banGCStatus.bangroup || "false";
    }
    if (
      BANGCSTATUS == "true" &&
      budy != `${prefix}unbangc` &&
      budy != `${prefix}unbangroup` &&
      body.startsWith(prefix) &&
      budy != `${prefix}support` &&
      budy != `${prefix}supportgc` &&
      budy != `${prefix}owner` &&
      budy != `${prefix}mods` &&
      budy != `${prefix}mod` &&
      budy != `${prefix}modlist`
    ) {
      if (m.isGroup && !isOwner && modStatus == "false") {
        return m.reply(
          `*${global.botName}* is *Banned* on *${groupName}* group! \n\nType *${prefix}owner* to submit a request to unban the group!`
        );
      }
    }



    //----------------------------------------------------------------------------------------------------------------//



    const flags = args.filter((arg) => arg.startsWith("--"));
    if (body.startsWith(prefix) && !icmd) {
      let Mikutext = `No command programmed *${pushname}* senpai! Type *${prefix}help* to get my Command list!\n`;
      const reactmxv = {
        react: {
          text: '❌',
          key: m.key,
        },
      };
      await Miku.sendMessage(m.from, reactmxv);

      Miku.sendMessage(m.from, { image: { url: botImage1, }, caption: Mikutext, }, {
        quoted: m,
      });
    }

    if (m.message) {
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? m.from : "Private Chat", m.chat)
      );
    }

    if (cmd) {
      const randomXp = Math.floor(Math.random() * 3) + 1; //Random amont of XP until the number you want + 1
      const haslUp = await Levels.appendXp(m.sender, "bot", randomXp);
    }
    if (
      text.endsWith("--info") ||
      text.endsWith("--i") ||
      text.endsWith("--?")
    ) {
      let data = [];
      if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`);

      if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`);
      if (cmd.usage)
        data.push(
          `*Example :* ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );

      let buttonmess = {
        text: `*Command Info*\n\n${data.join("\n")}`,
      };
      let reactionMess = {
        react: {
          text: cmd.react,
          key: m.key,
        },
      };
      await Miku.sendMessage(m.from, reactionMess).then(() => {
        return Miku.sendMessage(m.from, buttonmess, {
          quoted: m,
        });
      });
    }
    if (cmd.react) {
      const reactm = {
        react: {
          text: cmd.react,
          key: m.key,
        },
      };
      await Miku.sendMessage(m.from, reactm);
    }
    if (!cool.has(m.sender)) {
      cool.set(m.sender, new Collection());
    }
    const now = Date.now();
    const timestamps = cool.get(m.sender);
    const cdAmount = (cmd.cool || 0) * 1000;

    if (!isOwner && modStatus == "false" && !botNumber.includes(m.sender)) {
      if (timestamps.has(m.sender)) {
        const expiration = timestamps.get(m.sender) + cdAmount;

        if (now < expiration) {
          let timeLeft = (expiration - now) / 1000;
          return await Miku.sendMessage(
            m.from,
            {
              text: `Don't Spam ! You can use command after _${timeLeft.toFixed(
                1
              )} second(s)_`,
            },
            {
              quoted: m,
            }
          );
        }
      }
    }
    timestamps.set(m.sender, now);
    setTimeout(() => timestamps.delete(m.sender), cdAmount);

    cmd.start(Miku, m, {
      name: "Miku",
      metadata,
      pushName: pushname,
      participants,
      body,
      args,
      ar,
      groupName,
      botNumber,
      flags,
      isAdmin,
      groupAdmin,
      text,
      quoted,
      mentionByTag,
      mime,
      isBotAdmin,
      prefix,
      modStatus,
      NSFWstatus,
      isCreator,
      store,
      uptime,
      command: cmd.name,
      commands,
      Function: Func,
      toUpper: function toUpper(query) {
        return query.replace(/^\w/, (c) => c.toUpperCase());
      },
    });
  } catch (e) {
    e = String(e);
    if (!e.includes("cmd.start")) console.error(e);
  }
};
