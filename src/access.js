//动态生成权限数据
export default function (initialState) {
  console.log('权限文件', initialState);
  let { role } = initialState.userInfo ? initialState.userInfo : { role: '' };

  return {
    isRoot: role === 'root',
    isAdmin: role === 'root' || role === 'admin',
    isWorker: role === 'root' || role === 'admin' || role === 'worker',
  };
}
