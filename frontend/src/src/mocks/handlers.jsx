import { rest } from 'msw'

import { getBookList, postBook } from '@/mocks/api/tanks_id'

export const handlers = [
  rest.get('api/tank_list', geTANKList),
]