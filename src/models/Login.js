
export default {

  namespace: 'Login',

  state:[] ,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    submit(state,{name:username,passwd:userpasswd}) {
      return state.success;
    },
  },

};
