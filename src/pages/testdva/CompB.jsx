import React, { Component } from 'react';
import { connect } from 'umi';
class CompB extends Component {
  render() {
    console.log('CompA', this.props);
    return <div>CompB,{this.props.count}</div>;
  }
}
export default connect(({ count }) => ({ count }))(CompB);
