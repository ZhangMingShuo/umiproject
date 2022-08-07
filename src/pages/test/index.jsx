import React from 'react';
import {Button} from 'antd';
import {Link,history} from 'umi';
export default function Test() {
    return (
      <div>
        <Link to = "/">test1</Link>
        <Button type="primary" onClick={()=>{history.push('/')}}>按钮</Button>
      </div>
    );
}
