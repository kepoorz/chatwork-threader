import { logger } from './utils/logging/logger.js';
import { initOnChatworkPage } from './core/init.js';

logger.setLogLevel('INFO');

window.addEventListener('load', () => {
  logger.info('Chatwork Threader v2.0 ロード');
  initOnChatworkPage();
});
