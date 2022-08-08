import { request } from 'umi';
export const cateAdd = (cateObj) => {
  return request('/classes/CakeCate', {
    method: 'POST',
    data: cateObj,
  });
};
