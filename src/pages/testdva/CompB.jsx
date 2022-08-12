import React, { Component } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
class CompB extends Component {
  render() {
    console.log('CompA', this.props);
    return (
      <div>
        CompB,{this.props.count}
        <Button
          onClick={() => {
            this.props.dispatch({
              type: 'count/decrement',
            });
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            this.props.dispatch({
              type: 'count/increment',
              payload: 10,
            });
          }}
        >
          +
        </Button>
      </div>
    );
  }
}
export default connect(({ count }) => ({ count }))(CompB);
