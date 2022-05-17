import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../../features/userSlice/userSlice";

export const userLogInThunk = (userData) => async (dispatch) => {
  try {
    const endpoint = "user";
    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;

    const { data } = await axios.post(url, userData);
    const userInfo = jwtDecode(data.token);

    localStorage.setItem("token", data.token);
    dispatch(logInActionCreator(userInfo));
  } catch {}
};
