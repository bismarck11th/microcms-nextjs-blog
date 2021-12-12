import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kazuki-blog',
  apiKey: process.env.API_KEY
});
