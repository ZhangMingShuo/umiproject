//动态生成权限数据
export default function (initialState) {
  console.log('权限文件', initialState);
  return {
    isRoot: false,
    isAdmin: false,
    isWorker: true,
  };
}
