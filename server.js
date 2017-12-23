import app from './src/index';

app.get('/ping', (req, res) => {
  res.send('ping').status(200);
});
const PORT = process.env.PORT || 3000;
export const server = app.listen(PORT, () => console.log('Server is running at http://localhost:3000'));
