import mockjs from 'mockjs';
let dataList = mockjs.mock({
  code: 200,
  msg: '学员列表加载成功',
  'results|100': [
    {
      'objectId|+1': 1,
      name: '@cname',
      score: '@integer(50,100)',
      city: '@city',
      time: '@date',
    },
  ],
});
export default {
  // 支持值为 Object 和 Array
  'GET /classes/test': {
    username: 'zhangsan',
    score: 100,
  },
  'Get /classes/stu': dataList,
  'Delete /classes/stu': (req, res) => {
    console.log(req.query);
    let { id } = req.query;

    for (let i = 0; i < dataList.results.length; i++) {
      if (dataList.results[i].objectId == id) {
        dataList.results.splice(i, 1);
        res.send({
          code: 200,
          msg: '删除成功',
        });
        return;
      }
    }
    res.send({
      code: 100,
      msg: '未找到对应数据',
    });
  },
};
