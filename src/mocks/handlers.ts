import { createConfig } from '../config';
import { rest } from 'msw';
import { MockPostUserRequest } from './mockTypes';

const { apiUrl } = createConfig();

export const handlers = [
  rest.post<MockPostUserRequest>(`${apiUrl}/api/users`, (req, res, ctx) => {
    const { username } = req.body;

    if (req.body.username === '') {
      return res(ctx.status(400));
    }
    return res(ctx.status(201));
  }),
];
