import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios'
const service = axios.create({
    // baseURL: '',
    timeout: 3000
    // headers: {'X-Custom-Header': 'foobar'} 暂定
})

// Add a request interceptor
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
})

export interface IrequestKvs {
    [propName: string]: any;
}

interface Irequest extends AxiosRequestConfig{
    url: string,
    method: Method,
    kvs?:IrequestKvs,
    // data?:IrequestKvs,
    // params?: IrequestKvs,
    // [propName: string]: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function http(config:Irequest):AxiosPromise<any> {
    if(config.method.toLocaleLowerCase() === 'post') {
        config.data = config.kvs
    }else{
        config.params = config.kvs
    }
    delete config.kvs
    return service(config)
}

export default http