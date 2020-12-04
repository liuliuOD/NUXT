import Vue from 'vue'
import axios from 'axios'

const defaultOptions = {
    baseURL: process.env.nuxt_url || 'http://localhost:3010',
    headers: {
        common: {
            crossdomain: true,
            'Access-Control-Allow-Origin': '*',
        },
    }
}

Vue.prototype.$axios = axios.create(defaultOptions)
