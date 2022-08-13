import { request } from 'umi';
export const userLogin = (user) => {
  return request('/login', {
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
