import robotsReducer, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given a robotsReducer", () => {
  describe("When it's loadRobotsActionCreator receives a state with an a array containning a robot", () => {
    test("Then it should return a new state with the new array", () => {
      const actualState = [
        {
          id: "id",
          name: "Atutomata",
          resistance: 0,
          created: "00-00-0000",
          image: "image-url.jpg",
          velocity: 0,
        },
      ];
      const expectedNewState = [
        {
          id: "id",
          name: "Atutomata",
          resistance: 0,
          created: "00-00-0000",
          image: "image-url.jpg",
          velocity: 0,
        },
      ];

      const loadAction = loadRobotsActionCreator(actualState);

      const newState = robotsReducer(null, loadAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
