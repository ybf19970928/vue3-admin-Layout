import request, { responseState } from '@/utils/request'
import { AxiosResponse } from 'axios'

export type IUserLogin = {
    username: string;
    password: string
}
export function login(config: IUserLogin): Promise<AxiosResponse<responseState>> {
    return request({
        url: '/lejuAdmin/index/login',
        method: 'post',
        data: config
    })
}