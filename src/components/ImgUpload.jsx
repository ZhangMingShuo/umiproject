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
/*
const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
*/

class ImageUpload extends React.Component {
  state = {
    //类组件内部属性简写
    loading: false,
  };

  // handleChange = (info) => {//监控接口上传进度
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading : true })
  //     return;
  //   }
  //
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       this.setState({
  //         imageUrl,
  //         loading : false,
  //       })
  //     });
  //   }
  // };

  customUpload = (info) => {
    console.log(info);
    this.setState({ loading: true });
    getBase64(info.file, (base64) => {
      console.log(base64);
      const file = new Cloud.File('cakeimg.png', { base64 });
      console.log(file.name());
      file.save().then((res) => {
        console.log(res);
        let { url } = res.attributes;
        this.props.onChange(url); //把图片链接从自定义组件传到父组件,上传表单组件,onChange是Form内置的函数
        this.setState({
          loading: false,
          imageUrl: url, //预览在线图片
        });
      });
    });
  };

  //初始状态imageUrl为undefined渲染uploadButton,上传后imageUrl有值则根据图片链接渲染图片
  render() {
    const { loading, imageUrl } = this.state;
    console.log('ImgUpload组件的props', this.props);
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
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
export default ImageUpload;
