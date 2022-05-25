import { Toast } from 'antd-mobile'
import axios from 'axios'
export const baseURL = `http://fzyf.cc:3000`
const Axios = axios.create({
  baseURL
})

export function service(url: string, data = {}, type = 'GET') {
  return new Promise<IResponse>((resolve) => {
    let promise
    if (type === 'GET') {
      promise = Axios.get(url, {
        params: data
      })
    } else {
      promise = Axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        Toast.show({
          content: 'Error in request: ' + error.message,
          afterClose: () => {
            console.log('after')
          }
        })
      })
  })
}

export interface IResponse<T = any> {
  body: Array<T>
  description: string
  status: number
}
