import type { Component } from 'vue'

const RenderIcon = defineComponent({
  setup (props, { slots }) {
    return () => {
      return <n-icon v-bind={props}>{slots.default?.()}</n-icon>
    }
  }
})
export default RenderIcon
const renderIcon = (icon:Component) => h(RenderIcon, null, { default: () => h(icon) })
export { renderIcon }
