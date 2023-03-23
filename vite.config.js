import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3025,
      open: true
    },
    build: {
      target: 'es2015', // 浏览器兼容性
      outDir: 'release', // 指定输出路径
      commonjsOptions: {
        transformMixedEsModules: true // require可以使用
      },
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/js.[hash:10].js',
          assetFileNames: 'css/[name].[ext]'
        }
      }
    }
  })
}
