import methodExtract from 'method-extract';
import changeCase from 'change-case';

// Add methods containing 'Case' as Vue filters
const plugin = {
  install(Vue) {
    methodExtract.extractFrom(changeCase, /Case/).forEach((methodName) => {
      Vue.filter(methodName, value => changeCase[methodName](value));
    })
  }
}

export default plugin;
