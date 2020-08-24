import { createClient } from 'urql';

export const client = createClient({
  url: '/api',
});

export default client;
