function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const harley = 'https://envs.sh/SzD.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `˼⚡˹↜ 𝑯𝒐𝒍𝒂 @${mentionId.split('@')[0]}
> ˼🪪˹↜ 𝐓𝐮 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢ó𝐧 ↶
╮───────────────────⟢ـ
┆⚡↜ PREMIUM↞⌊ ${user.premiumTime > 0 ? '✔' : (isPrems ? '✔' : '❌') || ''} ⌉
┆⚜️↜ nivel↞⌊ ${level} ⌉
┆💫↜ rango↞⌊ ${role} ⌉
┆🧰↜ pericia↞⌊ ${exp} ⌉
┆💎↜ diamante↞⌊ ${limit} ⌉
╯───────────────────⟢ـ
> ˼🤖˹↜ 𝐞𝐥 𝐫𝐨𝐛𝐨𝐭↶
╮───────────────────⟢ـ
┆⚙️ ↜robot ↶﹝𝐅𝐋𝐀𝐒𝐇﹞
┆🪄 ↜Revelador ↶﹝𝐓𝐄𝐀𝐌﹞
┆📌 ↜Operante ↶﹝${uptime}﹞
┆🔖 ↜Usuarios ↶﹝${rtotalreg}﹞
╯───────────────────⟢ـ
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,subtitle: "Zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎Lista╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'Bienvenido a Flash-bot',
                                            highlight_label: 'flash te ama 🤖',
                                            rows: [
                                                {
                                                    header: 'Primera sección',
                                                    title: '#menu1',
                                                    description: '',
                                                    id: '.menu1'
                                                },
                                                {
                                                    header: 'Segunda sección',
                                                    title: '#menu2',
                                                    description: '',
                                                    id: '.menu2'
                                                },
                                                {
                                                    header: 'Sección tres',
                                                    title: '#menu3',
                                                    description: '',
                                                    id: '.menu3'
                                                },
                                                {
                                                    header: 'Sección cuatro',
                                                    title: '#menu4',
                                                    description: '',
                                                    id: '.menu4'
                                                },
                                                {
                                                    header: 'Sección Cinco',
                                                    title: '#menu5',
                                                    description: '',
                                                    id: '.menu5'
                                                },
                                                {
                                                    header: 'Sección Seis',
                                                    title: '#menu6',
                                                    description: '',
                                                    id: '.menu6'
                                                },
                                                {
                                                    header: 'Sección Siete',
                                                    title: '#menu7',
                                                    description: '',
                                                    id: '.menu7'
                                                },
                                                {
                                                    header: 'Sección ocho',
                                                    title: '#menu8',
                                                    description: '',
                                                    id: '.menu8'
                                                },
                                                {
                                                    header: 'Sección Nueve',
                                                    title: '#menu9',
                                                    description: '',
                                                    id: '.menu9'
                                                },
                                                {
                                                    header: 'Sección Diez',
                                                    title: '#menu10',
                                                    description: '',
                                                    id: '.menu10'
                                                },
                                                {
                                                    header: 'Sección Once',
                                                    title: '#menu11',
                                                    description: '',
                                                    id: '.menu11'
                                                },
                                                {
                                                    header: 'Sección Doce',
                                                    title: '#menu12',
                                                    description: '',
                                                    id: '.menu12'
                                                },
                                                {
                                                    header: 'Sección trece',
                                                    title: '#menu13',
                                                    description: '',
                                                    id: '.menu13'
                                                },
                                                {
                                                    header: 'Sección Catorce',
                                                    title: '#menu14',
                                                    description: '',
                                                    id: '.menu14'
                                                },
                                                {
                                                    header: 'Sección quince',
                                                    title: '#menu15',
                                                    description: '',
                                                    id: '.menu15'
                                                },
                                                {
                                                    header: 'Sección dieciséis',
                                                    title: '#menu16',
                                                    description: '',
                                                    id: '.listaporno'
                                                },
                                                {
                                                    header: 'Sección diecisiete',
                                                    title: '#menu17',
                                                    description: '',
                                                    id: '.hornymenu'
                                                },
                                                {
                                                    header: 'Sección diecisiete',
                                                    title: '#menu18',
                                                    description: '',
                                                    id: '.listhorny'
                                                },
                                                {
                                                    header: 'Sección diecisiete',
                                                    title: '#menu19',
                                                    description: '',
                                                    id: '.buscarmenu'
                                                },
                                                {
                                                    header: 'Sección diecisiete',
                                                    title: '#menu20',
                                                    description: '',
                                                    id: '.descargasmenu'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                },
                {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"⌈✅╎Desarrolladores╎✅⌋","id":".المطور"}'
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎Actualizaciones╎📲⌋","url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H","merchant_url":"https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu']

export default handler;
