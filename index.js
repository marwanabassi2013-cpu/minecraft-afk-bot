const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'minecitynice.aternos.me',
    port: 36812,
    username: 'AFK_Bot_Helper'
  });

  bot.on('spawn', () => {
    console.log('✅ تم بنجاح! البوت دخل إلى سيرفر الماينكرافت الآن.');
  });

  setInterval(() => {
    if (bot && bot.entity) {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
      console.log('🔄 قام البوت بحركة بسيطة لمنع طرده.');
    }
  }, 120000);

  bot.on('end', () => {
    console.log('⚠️ انقطع اتصال البوت، جاري إعادة المحاولة بعد 10 ثوانٍ...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('❌ حدث خطأ في البوت:', err);
  });
}

createBot();