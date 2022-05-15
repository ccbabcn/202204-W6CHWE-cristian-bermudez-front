import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Button from "./Button";

const passedText = "buttonTest";
const mockFunction = jest.fn();
const passedClass = "mockClass";

render(
  <Provider store={store}>
    <Button text={passedText} onClick={mockFunction} className={passedClass} />
  </Provider>
);
describe("Given a Button component", () => {
  describe("When it's invoked with a text", () => {
    test("Then it should render a button with the passed text", () => {
      const createdButton = screen.getByRole("button");
      expect(createdButton).toBeInTheDocument();
    });
  });
});
