module.exports = {
    name: "admins",
    alias: ["tagadmins" ,"admin"],
    desc: "Tag all group Admins.",
    category: "Group",
    usage: "admins <your message>",
    react: "🍁",
    start: async (
      Miku,
      m,
      { text, prefix, isAdmin, participants, args ,groupAdmin}
    ) => {

    let message = "       『 *Attention Admins* 』";

    if(m.quoted){
        message = "       『 *Attention Admins* 』";
      }
    else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ''}`;
    }
    else if(args[0]){
      message = `       『 *Attention Admins* 』\n\n_🎀 Message:_ *${args.join(' ')}*`;
    }
    else if(text ===''){
      message = "       『 *Attention Admins* 』";
    }
   
    else{
      message = "       『 *Attention Admins* 』";
    }
    
        Miku.sendMessage(m.from, { text: message, mentions: groupAdmin}, { quoted: m });
    }
}
