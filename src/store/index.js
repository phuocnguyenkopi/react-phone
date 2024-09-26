import { configureStore, createSlice } from "@reduxjs/toolkit";

//1 tao giá trị bản đầu
const initialPopup = { popUp: false, payload: [] };
const initialAcount = JSON.parse(localStorage.getItem("login")) || null;
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
//2 taọ slice
const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopup,

  reducers: {
    SHOW_POPUP(state, actions) {
      state.popUp = true;
      state.payload = actions.payload; //Lưu dữ liệu từ action vào stat
    },
    HIDDEN_POPUP(state) {
      state.popUp = false;
      state.payload = [];
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: initialAcount,

  reducers: {
    ON_LOGIN(state, actions) {
      const user = actions.payload;
      localStorage.setItem("login", JSON.stringify(user));
      return user; // trả vẻ cho state câp nhập vì mình ko cập nhập state nên nó không load lại Khi bạn viết một reducer, bạn cần phải trả về state mới để Redux biết cách cập nhật store. Redux sẽ không biết rằng state đã thay đổi, và nó sẽ tiếp tục sử dụng state cũ.
    },
    ON_LOGOUT(state) {
      localStorage.removeItem("login");
      return null;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,

  reducers: {
    ADD_CART(state, actions) {
      const index = state.findIndex((item) => item.id === actions.payload.id);

      if (index >= 0) {
        state[index].sl += actions.payload.sl;
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state, actions.payload])
        );
        return [...state, actions.payload];
      }
    },
    UPDATE_CART(state, actions) {
      const index = state.findIndex((item) => item.id === actions.payload.id);

      state[index].sl = actions.payload.quantityState;
      state[index].total = actions.payload.total;
      localStorage.setItem("cart", JSON.stringify(state));

      // return [...state, actions.payload];
    },
    DELETE_CART(state, actions) {
      const index = state.findIndex((item) => item.id === actions.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// 3tao store
const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    acount: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const popupAction = popupSlice.actions; // dung DISPATH
export const loginAction = loginSlice.actions;
export const cartAction = cartSlice.actions;

export default store; // USESELECTOR LAY DL

// Actions: Các action creators để bạn có thể dispatch các hành động.
// Reducer: Một hàm reducer để quản lý state dựa trên các hành động.
