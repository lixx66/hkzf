import { IResponse, service } from './service'
export interface ISwiper {
  id: number
  imgSrc: string
  alt: string
}
export const getSwiper: () => Promise<IResponse<ISwiper>> = () => service('home/swiper')
