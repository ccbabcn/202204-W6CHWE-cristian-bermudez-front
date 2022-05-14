import { rest } from "msw";
import { mockRobots } from "./mockRobots";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRobots));
  }),
];
