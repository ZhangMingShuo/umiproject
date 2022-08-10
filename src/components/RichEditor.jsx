import React, { useEffect, useRef } from 'react';
import E from 'wangeditor';
import Cloud from 'leancloud-storage';
const getBase64 = (img, callback) => {
  //将本地资源对象转换为base64编码
  const reader = new FileReader(); //原生js方法
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
export default function RichEditor(props) {
  let editorRef = useRef();
  useEffect(() => {
    let editor = new E(editorRef.current); //初始化富文本编辑器

    editor.config.menus = [
      'head', //加粗
      'bold', //标题
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      'todo',
      'justify',
      'quote',
      'emotion',
      'image',
      'splitLine', //链接
      'undo',
      'redo',
    ];
    editor.config.zIndex = 10;
    editor.config.onblur = function (newHtml) {
      // console.log('onblur', newHtml);
      props.onChange(newHtml); //向pub表单发送富文本数据
    };
    editor.config.customUploadImg = function (resultFiles, insertImgFn) {
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法
      console.log(resultFiles);
      getBase64(resultFiles[0], (base64) => {
        // console.log(base64);
        // insertImgFn(base64);
        const file = new Cloud.File('cakeimg.png', { base64 }); //调用LeanCloud SDK
        // console.log(file.name());
        file.save().then((res) => {
          // console.log(res);
          let { url } = res.attributes;
          insertImgFn(url);
        });
      });
      // 上传图片，返回结果，将图片插入到编辑器中
    };
    editor.create(); //向指定DOM中渲染编辑器
  }, []);
  return <div ref={editorRef}>渲染富文本编辑器</div>;
}
