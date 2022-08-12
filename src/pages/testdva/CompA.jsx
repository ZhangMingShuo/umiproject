import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

function CompA(props) {
  console.log('CompA', props);
  return (
    <div>
      CompA,{props.count}
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/increment', //count模块中的一个名为increment的reducer
          });
        }}
      >
        +
      </Button>
      <Button
        type="primary"
        onClick={() => {
          props.dispatch({
            type: 'count/incrementAsync',
          });
        }}
      >
        延迟2s后+
      </Button>
    </div>
  );
}
// export default connect((state)=>{
//   console.log('CompA获取的状态机数据',state)//获取到了models文件夹的count
//   return {count:state.count}
// })(CompA)

//简写
export default connect(({ count }) => ({ count }))(CompA);
