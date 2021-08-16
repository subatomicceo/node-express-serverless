import serverless from 'serverless-http';
import express from 'express';

// services
import fetchMedia from './media.services';

const app = express();

// get all media
app.get('/media', async (req, res) => {
  const media = await fetchMedia(req);
  console.log('media -->', media);
  return res.status(200).json(media);
});

// 404
app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export default app;
export const handler = serverless(app);
