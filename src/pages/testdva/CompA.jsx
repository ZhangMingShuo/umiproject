import React from 'react';
import { connect } from 'umi';

function CompA(props) {
  console.log('CompA', props);
  return <div>CompA,{props.count}</div>;
}
// export default connect((state)=>{
//   console.log('CompA获取的状态机数据',state)//获取到了models文件夹的count
//   return {count:state.count}
// })(CompA)

//简写
export default connect(({ count }) => ({ count }))(CompA);
