import { TabBar } from 'antd-mobile'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getActive } from 'utils/url'

import { tabs } from './constant'
export const FooterBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <TabBar
        className="FooterBar"
        onChange={(item) => {
          navigate(item)
        }}
        activeKey={getActive()}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  )
}
