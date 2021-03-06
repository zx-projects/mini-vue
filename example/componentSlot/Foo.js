import { h, renderSlots } from '../../lib/mini-vue.esm.js'

export const Foo = {
  setup() {},
  render() {
    const foo = h('p', {}, 'foo')
    return h('p', {}, [
      renderSlots(this.$slots, 'header', {
        count: 1,
      }),
      foo,
      renderSlots(this.$slots, 'footer'),
    ])
  },
}
