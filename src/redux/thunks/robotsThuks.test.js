import { mockRobots } from "../../mocks/mockRobots";
import { loadRobotsActionCreator } from "../features/robotsSlice";
import { loadRobotsThunk } from "./robotsThuks";

describe("Given a loadRobotsThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should disptach loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const robots = mockRobots;

      const expectedAction = loadRobotsActionCreator(robots);

      const thunk = loadRobotsThunk(null, mockRobots);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
