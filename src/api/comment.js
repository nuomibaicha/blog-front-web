import request from '../utils/request'

export function getByArticleId(articleId) {
    return request.get(`/comment/get/${articleId}`);
}
export function getQQInfo(qq) {
    return request.get(`/comment/getQQInfo/${qq}`)
}
export function save(params) {
    return request.post('/comment/save', params);
}
// export function del(params) {
//     return request.get(`/tag/delete/${params}`);
// }