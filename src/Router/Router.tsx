import { Find } from 'pages/Find/Find'
import { Home } from 'pages/Home/Home'
import { Message } from 'pages/Message/Message'
import { My } from 'pages/My/My'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/home" />
      <Route element={<Find />} path="/find" />
      <Route element={<My />} path="/my" />
      <Route element={<Message />} path="/message" />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
