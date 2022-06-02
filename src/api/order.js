import axiosClient from './axiosClient';

// api/checkoutApi.js
const orderApi = {
    post: (data) => {
        const url = `/orders`;
        return axiosClient.post(url, data);
    },
};
export default orderApi;
