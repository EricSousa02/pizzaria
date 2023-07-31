import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'r4sw8rfd',
  dataset: 'production',
  apiVersion: '2023-07-30',
  useCdn: false,
});

export default client;
