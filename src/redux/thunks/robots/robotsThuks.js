import axios from "axios";

import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../../features/robotsSlice/robotsSlice";
const endpoint = "robots/";

const token = localStorage.getItem("token");

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      `${process.env.REACT_APP_API_URL}${endpoint}`
    );
    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};

export const deleteRobotThunk = (robotId) => async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}${endpoint}delete/${robotId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      dispatch(deleteRobotActionCreator(robotId));
    }
  } catch {}
};
