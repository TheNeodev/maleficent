const fs = require('fs');
global.namebot = setting.botName
global.footer = setting.footer
global.loading = pickRandom([mess.wait, 'Sabakh...', 'Tunggu Sebentar...', 'Hold On...', 'Tahan...']);
global.ed = ["🕐", "🕑", "🕒", "🕒", "🕓", "🕓", "🕔", "🕔", "🕕", "🕖", "🕘", "🕙", "🕙", "🕚", "🕛"] //conn.edReply(m.chat, global.ed, "last_text", delay, m) example conn.edReply(m.chat, global.ed, "Succes", 500, m);
global.java = '⭔'
global.javi = '⬣'
global.star = '✨'
global.love = '💕'
global.zw = 'ㄊ'
global.sticker_wm = '© Ruhend'
global.logo_premium = 'Ⓟ'
global.logo_limit = 'Ⓛ'
global.isPrefix = ['.', ',', '#', '?', '/']
global.wm = `By ${setting.footer}`
global.logo_title = '═┅═┅═[ x ]═┅═┅═'
global.gcbot_short = 'http://surl.li/qgkhyu'
global.hyd_gcbot = ['Join group', gcbot_short] 
// link_group bisa kalian ganti link group kalian sendiri kalo punya, atau bisa link chanel juga kalo punya, atau bisa di isi dengan link lain , kalo dari bot ketik .setlink 
global.link_group = 'https://chat.whatsapp.com/tsst'
global.group_welcome = '*Selamat Datang 🐷*\n*%user* \n*Di %subject*\n*Kenalan dulu yuk*\n*Nama:*\n*Umur:*\n*Asal Kota:*\n*Hoby:*\n*Merek HP:*\n'
global.group_bye = '*Bye 🐽*\n*%user* \n*Has Left The %subject Group*'
// adReply is message with photo (cover)
global.adReply = true
// untuk owner limit akan tetap di kenakan fitur .addlimit dan lainya biar ga lupa ajah cheat ajh .addlimit nomormu 999999
global.use_limit_message = true
global.limit_message = '💋 %limit Limit Terpakai √'
// limit_adReply = send message limit with photo or cover 
global.limit_adReply = false
// mystery box true untuk menyalakan misteri box kalo dari bot ketik .on misteri on atau off
global.mystery_box = false 
// ini 5 menit delay pengiriman kotak misteri ke group jangan di bawah 3 menit takut spam nantinya
global.delay_box = 300_000 
// untuk pengingat sholat, false untuk matikan, kalo dari boty ketik .off sholat
global.auto_sholat = true
/**
 * backup_mongo if u wanna use mongodb change configuration on lib/src/cloud/mongo-db.js
 * setting langsung dari bot ketik .set atau lihat di menunya ketik .menu owner cobain satu satu biar paham 🐽
 **/
global.backup_mongo = false
global.backup_github = false
global.self = false
global.group_mode = false
global.anticall = true
global.group_only_message = false
/**
 * group_only_message is response message groupOnly when group mode is active in private chat.
 * true if wanna respond with groupOnly message
 * false if don't wanna respond message groupOnly in private chat ketik .set ada penjelasan nya atau lihat plugins/owner/owner-set.js",
 * untuk cek keterangan status bot setinganya ketik .status
 * kalo misalnya di log nya ada macam ni tengok https://files.catbox.moe/9pgsin.jpg
 * nah itu normal itu lagi ngebentuk sessions key nomor nomor member yang ada di grup juga, pokoknya nomor nomor sender, lama enggak nya tergantung jumlah member group / spek panel klen semakin besar semakin cepat write file prekey / session nya
**/
/** sc ini cocok untuk dipake .self (nomor pribadi utama) dan public bot **/
global.read_group = true
global.read_private = false
global.typing_group = false
global.typing_private = false
global.recording_group = false
global.recording_private = false
fs.loadFileSync(require.resolve(__filename));
/**  if you are not Indonesian just translate to your language because i don't know what language do u use
 * 
 * Cara ambil ID nomor kamu mudah
 * misalnya kalau ada grup yang kamu itu udh masukan setting nomor owner tapi bot kamu msh belum mendeteksi bahwa kamu bukan owner
 * ketik .getlid contoh lihat di gambar ini https://files.catbox.moe/kh9691.jpg
 * nah kalo udh salin nomor lid atau catet masukan di bagian ownerNumber di config.json itu dan silahkan cek lagi apakah sudah terdeteksi 
 * dan begitupun ambil ID / lid nomor kamu lainnya
**/