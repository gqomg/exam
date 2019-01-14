
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import Auth from '@a/js/myAuth.js'
const service = axios.create({
  // 请求超时时间
  timeout: 5000                 
})
service.interceptors.request.use(config => {
  if (Auth.hasToken()) {
    var loginInfo = JSON.parse(Auth.hasToken())
    config.headers.Authorization = 'Bearer ' + loginInfo.access_token
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          new Vue().$message({
            message: error.response.data.message,
            type: 'error'
          })
      }
      return Promise.reject(error.response.data)
    }
  }
)

const $ajax = (obj) => {
  return new Promise((resolve, reject) => {
    if (!obj.hasOwnProperty('type') || obj.type.toLowerCase() === 'get') {
      service.get(obj.url, {
        params: obj.params
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (response) {
        new Vue().$message({
          type: 'error',
          message: response.message
        })
      })
    } else if (obj.type.toLowerCase() === 'post') {
      let headers = {}
      let params = qs.stringify(obj.params)
      if (obj.hasOwnProperty('contentType')) {
        headers = {headers: {'Content-Type': obj.contentType}}
        params = obj.params
      }
      service.post(obj.url, params, headers).then(function (response) {
        resolve(response.data)
      }).catch(function (response) {
        new Vue().$message({
          type: 'error',
          message: response.message
        })
      })
    } else if (obj.type.toLowerCase() === 'delete') {
      service.delete(obj.url, {data: obj.params}).then(function (response) {
        resolve(response.data)
      }).catch(function (response) {
        new Vue().$message({
          type: 'error',
          message: response.message
        })
      })
    }
  })
}
export default $ajax
