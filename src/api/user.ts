import request, { IrequestKvs } from '@/utils/request'
import { AxiosPromise } from 'axios'
export function getUserRouter(config?:IrequestKvs):AxiosPromise<any> {
    return request({
        url: '/api/user',
        method: 'get',
        kvs: config
    })
}

export function login(config?:IrequestKvs):AxiosPromise<any> {
    return request({
        url: '/api/userLogin',
        method: 'post',
        kvs: config
    })
}