// Telegram Service for secure notification handling
// Environment variables VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID are prioritized

// Simple obfuscation helper to prevent plain-text string inspection in DevTools
const decodeKey = (encodedStr) => {
  try {
    return atob(encodedStr);
  } catch (e) {
    return encodedStr;
  }
};

// Encoded fallback values to prevent plain text token inspection in DevTools sources
const FALLBACK_TOKEN_B64 = "ODgwMTEzNzUyNTpBQUZudnA3SDFoeXVWV2xSRUtLd2FGM3I2S3NSZVFBRU54VQ==";
const FALLBACK_CHAT_B64 = "Njc2ODQ3MzExNw==";

const DEFAULT_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || decodeKey(FALLBACK_TOKEN_B64);
const DEFAULT_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || decodeKey(FALLBACK_CHAT_B64);

/**
 * Sends RSVP notification to Telegram Bot
 * @param {Object} data - { name, side, guests, message }
 */
export async function sendTelegramRsvpNotification(data) {
  const token = DEFAULT_BOT_TOKEN ? DEFAULT_BOT_TOKEN.trim() : '';
  const chatId = DEFAULT_CHAT_ID ? DEFAULT_CHAT_ID.trim() : '';

  if (!token || !chatId) {
    console.warn('Telegram Bot Token or Chat ID is missing. Please configure VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in .env');
    return { success: false, reason: 'unconfigured' };
  }

  const sideText = data.side === 'groom' ? '🤵 Nhà Trai (Việt Hưng)' : '👰 Nhà Gái (Ngọc Tuyền)';
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

  const textMessage = `
💌 *THÔNG BÁO XÁC NHẬN THAM DỰ MỚI* 💌
────────────────────────
👤 *Họ & Tên:* ${data.name}
🚩 *Khách thuộc:* ${sideText}
👥 *Số người đi cùng:* ${data.guests} người
💬 *Lời chúc:* ${data.message || '_Không có lời chúc_'}
⏰ *Thời gian gửi:* ${now}
────────────────────────
🎉 _Thiệp Cưới Online Nguyễn Việt Hưng & Nguyễn Thị Ngọc Tuyền_
  `.trim();

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: textMessage,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    if (result.ok) {
      return { success: true };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description };
    }
  } catch (error) {
    console.error('Network error sending Telegram notification:', error);
    return { success: false, error: error.message };
  }
}
