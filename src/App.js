import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThuks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return <RobotsList />;
}

export default App;
