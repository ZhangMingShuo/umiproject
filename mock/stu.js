import mockjs from 'mockjs'
export default {
  // 支持值为 Object 和 Array
  'GET /classes/test': {
      username:'zhangsan',
      score:100
   },
  'Get /classes/stu': mockjs.mock({
    code:200,
    msg: '学员列表加载成功',
    'data|100':[
      {
        'objectId|+1':1,
        name:'@cname',
        score:'@integer(50,100)',
        city:'@city',
        time:'@date'
      }
    ]
  })
}
