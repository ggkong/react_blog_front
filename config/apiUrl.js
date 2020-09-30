const ipUrl = 'http://39.101.162.208:7001/default/'
const servicePath = {
    getArticleList: ipUrl + 'getArticleList',    // get 文章列表
    getArticleById: ipUrl + 'getArticleById/',   // 按照 id 获取 文章详情 需要 后面需要加具体的 id
    getTypeInfo: ipUrl + 'getTypeInfo/',         // 获取Type 列表
    getListByTypeId: ipUrl + 'getListByTypeId/'  // 按照类型id 文章列表
}

export default servicePath;