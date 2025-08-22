const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing stream URL');

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1'
      }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', response.headers.get('content-type'));
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send('Stream fetch failed');
  }
};

