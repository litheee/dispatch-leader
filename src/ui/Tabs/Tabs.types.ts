import type { ReactElement } from 'react'

export type TabItemProps = {
  label: string
  children: React.ReactNode
}

export type TabListProps = {
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[]
  activeTabIndex: number
}
