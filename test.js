import Vue from 'vue/dist/vue';
import VueChangeCase from './';

Vue.use(VueChangeCase);

test('Plugin successfully transforms string', () => {
  const vm = new Vue({
    template: `
      <div>
        {{ 'hello-world' | titleCase }}
      </div>
    `,
  }).$mount();
  expect(vm.$el.innerHTML.trim()).toBe('Hello World');
});
