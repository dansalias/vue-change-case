import changeCase from 'change-case';

// Extract all methods matching *Case* from changeCase
const extractMethods = () => {
  const methodNames = [];
  for (const methodName in changeCase) {
    if (
      typeof changeCase[methodName] === "function" &&
      methodName.includes('Case')
    ) {
      methodNames.push(methodName);
    }
  }
  return methodNames;
};

// Add methods as Vue filters
const plugin = {
  install(Vue) {
    extractMethods().forEach((methodName) => {
      Vue.filter(methodName, value => changeCase[methodName](value));
    })
  }
}

export default plugin;
