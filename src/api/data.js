import fetch from '@/config/fetch'

/**
 * 登录
 */

export const login = data => fetch('/admin/login', data, 'POST');

 /**
  * 退出
  */

export const singout = data => fetch('/admin/singout');

  /**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');

/**
 * 新增文章
 */
export const addArticle = data => fetch('/article/add', data, 'POST');

/**
 * 获取文章列表
 */
export const getArticleLists = () => fetch('/article/lists',null,'POST');

/**
 * 修改
 */
export const modifyArticle = data => fetch('/article/modify',data,'POST');

/**
 * 删除
 */
export const deleteArticle = id => fetch('/article/delete',id,'POST');