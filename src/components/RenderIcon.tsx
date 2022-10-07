import type { Component } from 'vue'
const RenderIcon = defineComponent({
  props: {
    a: {
      type: Number
    }
  },
  setup (props, { slots }) {
    return () => {
      return <n-icon {...props}>{slots.default?.() ?? null }</n-icon>
    }
  }
})
function renderIcon (icon: Component, props?:any) {
  return () => h(RenderIcon, props, { default: () => h(icon) })
}
export { renderIcon }

export default RenderIcon
