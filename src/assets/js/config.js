/**
 * @file app全局通用配置文件
 * @author guoqing
 */
// let ip = 'http://10.201.5.250:8215'
// let ip = 'http://api.lfeiyun.com'
let serviceList = {
  admin: process.env.ADMIN_API,
  account: process.env.ACCOUNT_API
}

let service = serviceList.admin // 切换接口环境
let account = serviceList.account

let APIS = {}
APIS.login = account + '/login' // 登录
APIS.user = account + '/getUserInfo' // 获取权限

APIS.doGroup = service + '/apis/groups' // 分组
APIS.doApis = service + '/apis' // api列表

// 字典
APIS.httpMethod = service + '/system/dict/httpMethod' // http method
APIS.paramMode = service + '/system/dict/paramMode' // 入参请求模式
APIS.paramPosition = service + '/system/dict/paramPosition' // 参数位置
APIS.paramType = service + '/system/dict/paramType' // 参数类型
APIS.contentType = service + '/system/dict/contentType' // content-type
APIS.stage = service + '/system/dict/stage' // 环境

// 监控图表
APIS.minorChart1 = service + '/datasource/data/69048509-a465-41e7-9979-1382133f4adb'
APIS.minorChart2 = service + '/datasource/data/0705fa42-4c4c-4bf5-8c92-d350915d4a5f'
APIS.minorChart3 = service + '/datasource/data/3189cd5e-e5ab-46c9-89e7-b8b53c8b43cc'
APIS.minorChart4 = service + '/datasource/data/99cf6dde-871f-4a9a-961a-8523e7d42b71'

// 服务跟踪
APIS.apiTrace = service + '/apis/trace/'

APIS.apiApp = service + '/apis/signs' // 应用管理列表
APIS.apiSort = service + '/apis/sort'
APIS.usersPreposition = account + '/users/preposition'

// 策略
APIS.strategy = service + '/apis/strategy'
// 日志
APIS.apiLog = service + '/apis/log'

// 用户管理
APIS.sysUser = account + '/users'
APIS.roleID = account + '/role'

APIS.sysRole = account + '/role'
APIS.tree = account + '/res/tree' // 获取树结构数据

// 菜单
APIS.resTree = account + '/res/tree' // 获取菜单
APIS.resState = account + '/res/'
APIS.creatRes = account + '/res'

// 数据字典
APIS.sysDict = account + '/system/dict'
export {service, APIS}
