import React from 'react'
import { FcBusinessContact, FcHome, FcInvite, FcSearch } from 'react-icons/fc'
export const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <FcHome />
  },
  {
    key: 'find',
    title: '找房',
    icon: <FcSearch />
  },
  {
    key: 'message',
    title: '消息',
    icon: <FcInvite />
  },
  {
    key: 'my',
    title: '我的',
    icon: <FcBusinessContact />
  }
]
