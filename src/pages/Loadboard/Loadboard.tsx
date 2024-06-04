import { RouteCountriesCarousel, RouteInfo, Table } from '@/components'
import { Badge, Button, Select } from '@/ui'

import classes from './Loadboard.module.css'
import TriangleDownIcon from '@/assets/icons/triangle-down.svg?react'

export const LoadboardPage = () => {
  return (
    <div className={classes.page}>
      <div className={classes.top}>
        <RouteCountriesCarousel />

        <div className={classes.actions}>
          <Button size='medium' variant='outlined'>
            <TriangleDownIcon /> Search
          </Button>

          <Button size='medium' variant='outlined'>
            <TriangleDownIcon /> Search
          </Button>

          <Button size='medium' variant='outlined'>
            Manage Loads
          </Button>
        </div>
      </div>

      <div className={classes.filters}>
        <span>Filter by:</span>

        <Badge>Date</Badge>

        <Select label='Equipment' />

        <Select label='Mode' />

        <Select label='Tags' />

        <Select label='Rate' />

        <Badge>Length</Badge>

        <Badge>Company</Badge>

        <Select label='Distance' />
      </div>

      <div className={classes.table}>
        <Table />
      </div>

      <RouteInfo />

      <div className={classes.bottom}>
        <Button size='medium' variant='outlined'>
          Clear all
        </Button>

        <Button size='medium'>Compare Loads</Button>
      </div>
    </div>
  )
}
