import axios from "axios";

// EasterEgg: this is my unsplash public token

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID ulLTB12UZMQQ2WBv_MLqHA4aX5KljpsODsgDRbWPXDE',
    },
});