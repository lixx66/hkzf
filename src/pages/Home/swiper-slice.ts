import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSwiper, ISwiper } from 'service'

type swipperState = {
  swiper: ISwiper[]
  loading: 'idle' | 'pending'
  error: any
}

const initialState: swipperState = {
  swiper: [],
  loading: 'pending',
  error: null
}

export const getSwiperList = createAsyncThunk('swiper/getSwiperList', () => getSwiper())

export const swiperSilce = createSlice({
  name: 'swiper',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSwiperList.fulfilled, (state, action) => {
      console.log(action)
      state.loading = 'idle'
      state.swiper = [...action.payload.body]
    })
  }
})
