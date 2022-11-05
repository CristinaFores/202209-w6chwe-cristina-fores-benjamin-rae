import { rest } from "msw";

const url = process.env.REACT_APP_URL_API;
export const handlers = [
  rest.get(`${url}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
