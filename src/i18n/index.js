import Vue from 'vue';
import VueI18n from 'vue-i18n';

import cn from './cn.js';
import en from './en.js';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: sessionStorage.getItem('lang') || 'cn',
  messages: {
    cn,
    en
  },
  silentTranslationWarn: true, //解决vue-i18n黄色警告"value of key 'xxx' is not a string"和"cannot translate the value of keypath 'xxx'.use the value of keypath as default",可忽略
  globalInjection: true, // 全局注入
  fallbackLocale: 'cn', // 指定的locale没有找到对应的资源或当前语种不存在时，默认设置当前语种为中文
});

export default i18n;