import { Request, Response } from 'express';
import got from 'got';
import dotenv from 'dotenv';

// load env vars
dotenv.config();

// env vars

const fetchMedia = async (req: Request): Promise<void> => {
  return got(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API}&language=en-US&include_adult=false&query=${req.query.s}`,
  ).json();
};

export default fetchMedia;
