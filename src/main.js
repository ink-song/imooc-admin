/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-05-16 22:02:24
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-07-08 00:00:35
 * @FilePath: /imooc-admin/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import installIcons from '@/icons'
import installElementPlus from './plugins/element'
import './permission'
import i18n from './i18n'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(i18n).use(router).mount('#app')
