// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_HOST = 'https://interviews-backend-api.herokuapp.com';
const KEY = 'A7xxpWVFBtiongc1HUGH4jrLvbw-VJOh';

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const postParams = {};

  if (req.method === 'POST') {
    postParams.body = req.body;
  }

  const request = await fetch(`${API_HOST}${req.url}`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: KEY,
    },
    ...postParams,
  });
  const response = await request.json();

  return res.json(response);
};
