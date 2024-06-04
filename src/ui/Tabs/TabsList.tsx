import React, { ReactElement, useState } from 'react'
import cn from 'classnames'

import { TabItem } from './TabItem'

import { sanitizeForId } from '@/utils'
import { TabItemProps, TabListProps } from './Tabs.types'

import classes from './Tabs.module.css'

export const TabList = ({ children, activeTabIndex = 0 }: TabListProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  )

  return (
    <div className={classes.tabs}>
      <div className={classes['tabs-wrapper']}>
        <ul className={classes['tabs-list']} role='tablist' aria-orientation='horizontal'>
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                key={`tab-btn-${index}`}
                role='tab'
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={cn(classes['tab-btn'], {
                  [classes['tab-btn-active']]: activeTab === index
                })}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {tabs[activeTab]}
    </div>
  )
}
