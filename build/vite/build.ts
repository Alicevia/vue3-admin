
export const createViteBuild = () => {
  return {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'static/assets',
    assetsInlineLimit: 1024 * 4,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      // 指定文件输出的配置
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks (id: any) {
          if (id.includes('node_modules')) {
            return 'vendor' // 代码分割为第三方包
          }
        }
      }
    },
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  }
}
