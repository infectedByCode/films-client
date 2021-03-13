import { createConfig } from '../config';
import { rest } from 'msw';
import { MockPostUserRequest } from './mockTypes';

const { apiUrl } = createConfig();

export const handlers = [
  rest.post<MockPostUserRequest>(`${apiUrl}/api/users`, (req, res, ctx) => {
    if (process.env.THROW_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({
          status: 400,
          statusText: 'error',
        })
      );
    }
    return res(
      ctx.status(201),
      ctx.json({
        status: 201,
        data: [],
      })
    );
  }),
];
