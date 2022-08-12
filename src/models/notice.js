export default {
  state: {
    list: [
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告',
        desc: '如果坚持上班到年底将会得到4个月的年终奖',
        read: false,
      },
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告11',
        desc: '如果坚持上班到年底将会得到4个月的年终奖11',
        read: true,
      },
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告22',
        desc: '如果坚持上班到年底将会得到4个月的年终奖22',
        read: false,
      },
    ],
  },
  reducers: {
    readed(state, action) {
      let { payload } = action;
      state.list[payload].read = true;
      console.log(state);
      return { ...state };
    },
  },
};
