import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import {router} from '@/router/index'
import store from '@/store/index'
import request from '@/utils/request'
import tool from '@/utils/tool'  //工具函数
import 'promise-polyfill'  //兼容低版本浏览器  
import 'babel-polyfill' //兼容低版本浏览器  


import '@/utils/directive'  //自定义指令

import '@/utils/mock.js'  //测试接口


import '@/assets/css/index.less'

import Meta from 'vue-meta';
Vue.use(Meta);



// 将API方法绑定到全局
Vue.prototype.$r=request

//绑定工具函数到全局
Vue.prototype.$tool = tool
Vue.prototype.$store = store


Vue.config.productionTip = false
function getServerConfig() {
  return new Promise ((resolve, reject) => {
    axios.get('/serverConfig.json').then((result) => {
      console.log(result)
      let config = result.data;
      let ajaxUrl = process.env.NODE_ENV == 'production' ? config.production:config.develop;
      Vue.prototype.$ajaxUrl=ajaxUrl;
      require('./permission.js')
      resolve();
    }).catch((error) => {
      console.log(error)
      reject()
    })
  })
}

async function init() {
  await getServerConfig();
  new Vue({
    router,
    store,
    metaInfo(){
      return {
          title: this.$store.state.app.metaInfo.title,
          meta: [
              {
                  name: "keywords",
                  content: this.$store.state.app.metaInfo.keywords
              }, {
                  name: "description",
                  content: this.$store.state.app.metaInfo.description
              }
          ]
      }
    },
    render: h => h(App),
  }).$mount('#app')
}
init();
