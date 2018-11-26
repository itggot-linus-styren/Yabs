import { createDecorator } from 'vue-class-component';

export function Getter (getterType : any) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      // @ts-ignore: getters is declared in store
      return this.$store.getters[getterType]
    }
  })
}
