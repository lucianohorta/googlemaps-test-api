const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const { method, headers, query } = req;
        const apiUrl = 'https://maps.googleapis.com/maps/api/';
        const apiKey = 'AIzaSyBzsXK0RA7jaF5QdlEhiWci4ec96Fv_YsM';

        const response = await axios({
            method,
            url: `${apiUrl}${req.query.path}`,
            headers,
            params: {
                ...query,
                key: apiKey,
            },
        });

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};
