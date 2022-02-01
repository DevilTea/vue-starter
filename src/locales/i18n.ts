import { createI18n } from 'vue-i18n'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import type _messages from './zh-TW.json'

type MessageSchema = typeof _messages
type AvailableLocale = 'zh-TW' | 'en'

export const i18n = createI18n<[MessageSchema], AvailableLocale>({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages,
})
