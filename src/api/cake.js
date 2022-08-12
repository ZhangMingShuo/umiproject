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

export const goodsAdd = (cakeObj) => {
  //新增商品
  return request('/classes/CakeGoods', {
    method: 'POST',
    data: cakeObj,
  });
};

export const goodsExchange = (cakelist, values) => {
  //商品自动转存
  let batchObj = { requests: [] };
  cakelist.forEach((item) => {
    batchObj.requests.push({
      method: 'POST',
      path: '/1.1/classes/CakeGoods',
      body: { ...item, ...values },
    });
  });

  return request('/batch', {
    method: 'POST',
    data: batchObj,
  });
};
