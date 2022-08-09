import { request } from 'umi';
export const cateAdd = (cateObj) => {
  return request('/classes/CakeCate', {
    method: 'POST',
    data: cateObj,
  });
};

export const bannerAdd = (bannerObj) => {
  return request('/classes/CakeBanner', {
    method: 'POST',
    data: bannerObj,
  });
};
