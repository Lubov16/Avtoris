import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: 'user', 
  initialState: { // определяем структуру данных и их начальные значения
    logined: false,
    name: '',
    lastName: '',
  },
  reducers: { // передаются функции, которые меняют данные
    login: (state, data) =>  {
      const {login, password } = data?.payload;
      if (login === "zxc" && password === "123") {
         state.logined = true;
         state.name = 'Мария';
         state.lastName = 'Ивановна';
      }
    },
    logout: (state) => {
      state.logined = false;
      state.name = '';
      state.lastName = '';
    }
  }
});

export const { login, logout } = userData.actions;

export default userData.reducer;