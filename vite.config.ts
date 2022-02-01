/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/vite-plugin-vue-i18n'
import IconsPlugin from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImportPlugin from 'unplugin-auto-import/vite'
import ComponentsPlugin from 'unplugin-vue-components/vite'
import StylelintPlugin from '@amatlash/vite-plugin-stylelint'
import EslintPlugin from '@nabla/vite-plugin-eslint'
/* eslint-enable import/no-extraneous-dependencies */

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    // REF: https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    VuePlugin(),
    // REF: https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18nPlugin({
      include: path.resolve(__dirname, 'src/locales/**'),
    }),
    // REF: https://github.com/antfu/unplugin-icons
    IconsPlugin({
      compiler: 'vue3',
    }),
    // REF: https://github.com/antfu/unplugin-vue-components
    ComponentsPlugin({
      dts: path.join(__dirname, 'src/typings/auto-global-components.d.ts'),
      dirs: [],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
      ],
    }),
    // REF: https://github.com/antfu/unplugin-auto-import
    AutoImportPlugin({
      imports: [
        'vitest',
        'vue',
        'vue-i18n',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: path.join(__dirname, 'src/typings/auto-import.d.ts'),
      eslintrc: {
        enabled: true,
      },
      // TODO: 這邊只是一個 workaround，待解決
      // https://github.com/antfu/unplugin-auto-import/pull/112
      // 等 release
      resolvers: [() => null],
    }),
    // REF: https://github.com/AMatlash/vite-plugin-stylelint
    StylelintPlugin(),
    // REF: https://github.com/nabla/vite-plugin-eslint
    EslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
    },
  },
  server: {
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
