import Cloud from 'leancloud-storage';
import { leancloudConfig } from '../secrets';
Cloud.init({
  appId: leancloudConfig.storage.AppID,
  appKey: leancloudConfig.storage.AppKey,
  serverURL: 'https://41uakczk.lc-cn-n1-shared.com',
});
