/**
 * @file app全局通用配置文件
 * @author guoqing
 */
let ip = 'http://192.168.0.102:8080/web-front'
let APIS = {}
APIS.login = ip + '/login/login'
APIS.captcha = ip + '/login/captcha.jpg'

APIS.list_registration = ip + '/exam_registration/list_registration'
export { ip, APIS }
