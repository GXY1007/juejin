"use strict";

import Vue from 'vue';
import axios from "axios";


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL:''
    // timeout: 15000 // 请求超时时间
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        console.log(error)// for debug
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        const res = response.data
        if (res.code !== 0) {
            // Message({
            //   message: res.message,
            //   type: 'error',
            //   duration: 3 * 1000
            // })
        }
        return response;
    },
    function(error) {
        console.log('err' + error)// for debug
        return Promise.reject(error);
    }
);

export default  _axios;
