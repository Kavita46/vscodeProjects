import { createStore } from "redux";
const store = createStore(function (state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "add":
      state += action.num;
      return state;
    case "reduce":
      state -= action.num;
      return state;
    default:
      return state;
  }
});
console.log(store);
console.log("getState", store.getState());

const action = {
  type: "add",
  num: 1,
};

const reduceAction = {
    type: "reduce",
    num: 10,
  };

store.dispatch(action);
console.log("添加1", store.getState());
store.dispatch(reduceAction);
console.log("减少10", store.getState());

export default store;
