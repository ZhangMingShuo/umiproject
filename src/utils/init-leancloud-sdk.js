import Cloud from 'leancloud-storage';
import { leancloudConfig } from '../secrets';
Cloud.init({
  appId: leancloudConfig.storage.AppID,
  appKey: leancloudConfig.storage.AppKey,
  serverURL: leancloudConfig.storage.serverURL,
});
