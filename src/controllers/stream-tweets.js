import Twit from 'twit';
import router from '../router';

router.get('/stream', async (req, res) => {
  try {
    const T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      timeout_ms: 60 * 1000,
    });

    const stream = T.stream('statuses/filter', { track: ['@BaianaSystem', '#baianasystem', 'baianasystem', 'baiana system'], follow: '111329672' });

    stream.on('connect', () => {
      console.log('Connection attempted.');
    });
    stream.on('connected', () => {
      console.log('Connection successful.');
    });
    stream.on('tweet', (tweet) => {
      console.log(tweet);
    });
    stream.on('disconnect', (disconnectMessage) => {
      console.log('Connection terminated');
      throw disconnectMessage;
    });

    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});
