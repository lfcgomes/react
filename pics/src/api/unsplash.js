import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 03544377621793ed235f65777e00a48a9a1e0deeabad284ca5db123612de8640'
    }
});
