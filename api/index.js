import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'API está funcionando com Express + Babel no Vercel!' });
});

export default app;
