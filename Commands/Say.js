
const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args, embed) => {
  

  let botcommands = "937013974237601883"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanabilmen için <@&${botcommands}> rolüne sahip olman gerekiyor.`).setColor("BLUE")).then(x => x.delete({ timeout: 6500 }));
  
  let tag = "Røse";///Buraya Farklı Farklı Taglarınızı Sıralayınız
  let tag3 = "¿";
  let tag4 = "Rose";
  let tag6 = "rose";
  let tag5 = "Roseee";
  const etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0105").size;
  const tag2 = message.guild.members.cache.filter(m => m.user.username.includes(tag) || m.user.username.includes(tag3) || m.user.username.includes(tag4) || m.user.username.includes(tag5) || m.user.username.includes(tag6)).size 
  const toptag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag) || member.user.discriminator == "0105" || member.user.username.includes(tag3) || member.user.username.includes(tag3) || member.user.username.includes(tag4) || member.user.username.includes(tag5) || member.user.username.includes(tag6)).size;
  const swtop = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const sayy = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter('Developed by Kachi')
  message.react('937085421144379423') // Onay veya tag emoji ID
  message.channel.send(sayy.setDescription(`\`•\` Toplam \`${swtop}\` üye bulunmakta. 
  \`•\` Tagımızda toplam \`${tag2}\` üye bulunmakta.
  \`•\` Etiketimizde toplam \`${etiket}\` üye bulunmakta.
  \`•\` Etiketimizde ve tagımızda toplam \`${toptag}\` üye bulunmakta.
  \`•\` Ses kanallarında \`${ses}\` üye bulunmakta.`));
};

exports.config = {
    name: "say",
    guildOnly: true,
    aliases: [],
    cooldown: 3000
};