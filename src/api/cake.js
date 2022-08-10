import { request } from 'umi';
export const cateAdd = (cateObj) => {
  return request('/classes/CakeCate', {
    method: 'POST',
    data: cateObj,
  });
};

export const cateGet = () => {
  return request('/classes/CakeCate', {
    method: 'Get',
  });
};

export const bannerAdd = (bannerObj) => {
  return request('/classes/CakeBanner', {
    method: 'POST',
    data: bannerObj,
  });
};

export const bannerGet = () => {
  return request('/classes/CakeBanner', {
    method: 'GET',
  });
};

export const bannerUpdate = (objectId, bannerObj) => {
  return request(`/classes/CakeBanner/${objectId}`, {
    method: 'Put',
    data: bannerObj,
  });
};
