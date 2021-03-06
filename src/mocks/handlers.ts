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
  rest.get<MockPostUserRequest>(`${apiUrl}/api/films`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        films: [
          {
            uid: '1234',
            title: 'film of a lifetime',
            description: 'an average film really',
            year: 1999,
            keywords: 'action,romcom,funny',
          },
          {
            uid: '5678',
            title: 'film that was a flop',
            description: 'an bad film that destroyed their careers',
            year: 2021,
            keywords: 'flop,action',
          },
        ],
      })
    );
  }),
];
