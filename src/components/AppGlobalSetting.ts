import { useDialog, useLoadingBar, useMessage } from 'naive-ui'

const AppGlobalSetting = defineComponent({
  setup: (props, { slots }) => {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    return () => slots.default?.()
  }
})

export default AppGlobalSetting
