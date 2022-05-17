import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robots/robotsThuks";
import { userLogInThunk } from "../../redux/thunks/user/userThunk";

const SigInForm = () => {
  const initialFormState = {
    username: "",
    password: "",
  };
  const [actualFormState, setFormState] = useState(initialFormState);

  const setInputValue = (event) => {
    setFormState({ ...actualFormState, [event.target.id]: event.target.value });
  };

  const [buttonIsAble, setButtonIsAble] = useState(true);

  useEffect(() => {
    if (actualFormState.username !== "" && actualFormState.password !== "") {
      setButtonIsAble(false);
    } else {
      setButtonIsAble(true);
    }
  }, [actualFormState]);

  const dispatch = useDispatch();

  const logInOnSubmit = async (event) => {
    event.preventDefault();
    await dispatch(userLogInThunk(actualFormState));
    await dispatch(loadRobotsThunk());
    setFormState(initialFormState);
  };

  return (
    <form autoComplete="off" onSubmit={logInOnSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          value={actualFormState.username}
          onChange={setInputValue}
          type="text"
          id="username"
          className="form-control"
          aria-describedby="userName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={actualFormState.password}
          onChange={setInputValue}
          type="password"
          className="form-control"
          id="password"
        />
      </div>

      <button disabled={buttonIsAble} type="submit" className="btn btn-primary">
        LOG IN
      </button>
    </form>
  );
};

export default SigInForm;
