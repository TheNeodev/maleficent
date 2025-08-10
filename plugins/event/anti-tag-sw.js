module.exports = {
   start: async (m, {
      conn,
      Format
   }) => {
      try {
         if (Object?.keys(statusMentions)?.length > 1 && db.chats[statusMentions?.key?.remoteJid]?.tagsw && !db.chats[statusMentions?.key?.remoteJid].mute) {
            const participants = (await conn.groupMetadata(statusMentions.key.remoteJid)).participants;
            const groupAdmins = participants?.filter(v => v.admin !== null).map(v => v.id);
            const isAdmins = groupAdmins?.includes(statusMentions.key.participant);
            const isBotAdmins = groupAdmins?.includes(conn.decodeJid(conn.user.id));
            const isOwner = statusMentions.key.participant.endsWith('@lid') ? [...setting.ownerNumber, conn.decodeJid(conn.user.id).split('@')[0]].map(num => `${num}@lid`).includes(statusMentions.key.participant) : [...setting.ownerNumber, conn.decodeJid(conn.user.id).split('@')[0]].map(num => `${num}@s.whatsapp.net`).includes(statusMentions.key.participant);
            if (isOwner) return console.log('Owner sending status mentions'), statusMentions = {};
            if (isAdmins) return console.log('Admin sending status mentions'), statusMentions = {};                  
            conn.reply(statusMentions.key.remoteJid, `*Terdeteksi Pansos Caper Tag Status Ke Group Atau Ngemis Penonton*\n*Silahkan Klik Laporkan dan Blokir Orang Ini*\n*@${statusMentions.key.participant.split("@")[0]}*\n*Agar Status Gak Guna atau Status Sampah Dia Tidak Muncul Di Menu Status Pembaruan Kalian*`, statusMentions, { contextInfo: { mentionedJid: [statusMentions.key.participant] }});
            if (isBotAdmins) {
               await conn.sendMessage(statusMentions.key.remoteJid, {
                  delete: statusMentions.key
               });
               await conn.groupParticipantsUpdate(statusMentions.key.remoteJid, [statusMentions.key.participant], 'remove');
            };
            return await conn.updateBlockStatus(statusMentions.key.participant, 'block'), statusMentions = {};
        }
      } catch (e) {
         return console.error(e)
      }
   }
}