const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { url } = req.query;

    try {
        const response = await fetch(url);
        const data = await response.buffer();

        res.setHeader('Content-Type', response.headers.get('Content-Type'));
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Optional: Set caching headers

        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};
