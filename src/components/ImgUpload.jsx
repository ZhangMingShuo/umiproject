import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
import Cloud from 'leancloud-storage';
const getBase64 = (img, callback) => {
  //将本地资源对象转换为base64编码
  const reader = new FileReader(); //原生js方法
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

class ImageUpload extends React.Component {
  state = {
    //类组件内部属性简写
    loading: false,
  };

  customUpload = (info) => {
    console.log(info);
    this.setState({ loading: true }); //未上传完成设置loading为true
    getBase64(info.file, (base64) => {
      console.log(base64);
      const file = new Cloud.File('cakeimg.png', { base64 }); //调用LeanCloud SDK
      console.log(file.name());
      file.save().then((res) => {
        console.log(res);
        let { url } = res.attributes;
        this.props.onChange(url); //把图片链接从自定义组件传到父组件,上传表单组件,onChange是Form内置的函数
        this.setState({
          loading: false,
          imgurl: url, //预览在线图片
        });
      });
    });
  };

  //初始状态imageUrl为undefined渲染uploadButton,上传后imageUrl有值则根据图片链接渲染图片
  render() {
    // console.log('ImgUpload start render() : ');
    // console.log('ImgUpload this.state : ',this.state);
    const { loading, imgurl } = this.state;
    // console.log('loading:',loading);
    console.log('ImgUpload的imgurl:', this.props.imgurl);
    // console.log('ImgUpload组件的props', this.props);
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={this.customUpload}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {this.props.imgurl ? (
          <img src={this.props.imgurl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
export default ImageUpload;
