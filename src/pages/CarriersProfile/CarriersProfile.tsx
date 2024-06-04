import { CompanyProfileForm } from '@/components'

import { TabItem, TabList } from '@/ui'

import classes from './CarriersProfile.module.css'

export const CarriersProfilePage = () => {
  return (
    <>
      <TabList activeTabIndex={0}>
        <TabItem label='Company profile'>
          <CompanyProfileForm />
        </TabItem>

        <TabItem label='Change password'>2</TabItem>
        <TabItem label='Manage subscriptions'>3</TabItem>
        <TabItem label='Manage users'>4</TabItem>
        <TabItem label='Billing'>5</TabItem>
        <TabItem label='Manage drivier'>6</TabItem>
      </TabList>
    </>
  )
}
