import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn }) => {
  if (m.quoted?.fromMe || m.isButton) return

  m.react('🕷️')

  const imageUrl = 'https://files.catbox.moe/eivdme.jpg'
  const numCreador = '5213344276207'
  const ownerJid = numCreador + '@s.whatsapp.net'

  const name = '𝗖𝗵𝗶𝗸𝗶𝘀 🕷️'
  const about = '𝐒𝐨𝐲 𝗖𝗵𝗶𝗸𝗶𝘀, 𝐃𝐮𝐞𝐧̃𝐨 𝐝𝐞𝐥 𝐁𝐨𝐭: 𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝐛𝐨𝐭 🕷️'
  const empresa = '𝗖𝗵𝗶𝗸𝗶𝘀 - 𝐒𝐞𝐫𝐯𝐢𝐜𝐢𝐨𝐬 𝐭𝐞𝐜𝐧𝐨𝐥𝐨́𝐠𝐢𝐜𝐨𝐬 🕷️'
  const instagramUrl = ''

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa};
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:correo@empresa.com
URL:${instagramUrl}
NOTE:${about}
ADR:;;Dirección de tu empresa;;;;
X-ABADR:ES
X-ABLabel:Dirección Web
X-ABLabel:Correo Electrónico
X-ABLabel:Teléfono de contacto
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim()

  await conn.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: name,
        contacts: [{ vcard }]
      },
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗕𝗼𝘁',
          body: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗕𝗼𝘁',
          thumbnailUrl: imageUrl,
          sourceUrl: instagramUrl,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    },
    { quoted: m }
  )
}

handler.help = ['owner']
handler.tags = ['owner']
handler.command = /^\owner$/i
handler.register = false
export default handler