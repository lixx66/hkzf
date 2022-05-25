import { Swiper } from 'antd-mobile'
import React, { useEffect } from 'react'
import { baseURL } from 'service/service'
import { useAppDispatch, useAppSelector } from 'store/hooks'

import { getSwiperList } from './swiper-slice'

export function TopSwiper() {
  const swiperList = useAppSelector((state) => state.swiper)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSwiperList())
  }, [])

  return (
    <>
      <Swiper loop style={{ height: '30vh', width: '100vw' }}>
        {swiperList?.map((swiper: any) => (
          <Swiper.Item key={swiper.imgSrc}>
            <img src={`${baseURL}${swiper.imgSrc}`} alt={swiper.alt} style={{ height: '30vh', width: '100vw' }} />
          </Swiper.Item>
        ))}
      </Swiper>
      <div></div>
    </>
  )
}
