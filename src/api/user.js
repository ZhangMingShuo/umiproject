import { request } from 'umi';
export const userLogin = (user) => {
  return request('/login', {
    method: 'POST',
    data: user,
  });
};

export const userReg = (user) => {
  //账号分配,此处user携带role角色
  return request('/users', {
    method: 'POST',
    data: user,
  });
};

//角色新增
export const roleAdd = (roleObj) => {
  return request('/classes/CakeRole', {
    method: 'POST',
    data: roleObj,
  });
};

//角色列表
export const roleGet = (roleObj) => {
  return request('/classes/CakeRole', {
    method: 'GET',
  });
};
