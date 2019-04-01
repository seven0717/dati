import * as types from './types';
// import {REMBER_TIME} from "types";

export default {
//  记录做题时间
  [types.REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000)
  },
  //记录答案
  [types.REMBER_ANSWER](state, id) {
    state.answerid.push(id)
  },
  //点击进入下一题
  [types.ADD_ITEMNUM](state,num){
    state.itemNum += num;
  },
  // 初始化信息，
  [types.INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  }
}
