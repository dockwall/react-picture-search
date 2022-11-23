import axios from "axios";

// This is my Unsplash API key
// I know what I'm doing - this key should be here
// This is test pet project, why not?
// This key works only 50 times a hour

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID ulLTB12UZMQQ2WBv_MLqHA4aX5KljpsODsgDRbWPXDE',
    },
});