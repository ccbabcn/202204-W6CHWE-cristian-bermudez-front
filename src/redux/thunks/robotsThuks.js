import axios from "axios";

import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      process.env.REACT_APP_API_URL
    );
    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};
