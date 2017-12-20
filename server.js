import app from './src/index';

app.get('/ping', (req, res) => {
  res.send('ping').status(200);
});

export const server = app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
