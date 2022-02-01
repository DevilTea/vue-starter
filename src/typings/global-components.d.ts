// REF: https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-vue-language-features#usage
declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    Transition: typeof import('vue')['Transition']
    // add more components here
  }
}

export {}
