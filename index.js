import axios from 'axios'
import qs from 'qs'

let Axios=axios.create({
  baseURL: 'http://ec.51macc.com',
  timeout: 8000,
    // baseURL: 'https://ec.51macc.com',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return qs.stringify(data);
    }],
  });
Axios.interceptors.request.use(
  config => {
  if(token){
    config.headers.Authorization = `token ${token}`;  
  }
    // config.headers.common['Authorization'] = '251651561651';
      return config;
  },
  error => {
      return Promise.reject(error);
  }
)
  // Axios.defaults.headers.common['Authorization'] = '52555522225589663';
export default{
    install(Vue){
        Vue.prototype.$http=Axios 
    }
}