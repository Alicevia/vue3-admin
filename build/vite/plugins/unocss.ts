import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export default () => {
  return Unocss({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        prefix: 'i-',
        scale: 1.2,
        warn: true,
        extraProperties: {
          display: 'inline-block'
        },
        collections: {
          'line-md': () =>
            import('@iconify-json/line-md/index.js').then((i) => {
              return i.icons
            })
        }
      })
    ]
  })
}
