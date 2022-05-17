import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", name: "", id: "" },
  reducers: {
    userLogIn: (user, action) => ({ ...action.payload }), //sin los parentesis se piensa que son las llaves de una funcion arrow
    userLogOut: (user, action) => ({}),
  },
});

export const {
  userLogIn: logInActionCreator,
  userLogOut: logOutActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
