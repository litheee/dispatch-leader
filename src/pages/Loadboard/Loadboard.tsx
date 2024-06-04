import { RouteCard, RouteCountriesCarousel, RouteInfo, Table } from '@/components'
import { Badge, Button, Select } from '@/ui'

import classes from './Loadboard.module.css'
import TriangleDownIcon from '@/assets/icons/triangle-down.svg?react'
import LoupeIcon from '@/assets/icons/loupe.svg?react'
import SortIcon from '@/assets/icons/sort.svg?react'
import FiltersIcon from '@/assets/icons/filters.svg?react'

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
            <TriangleDownIcon /> Post
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

      <div className={classes['route-search-fields']}>
        <div className={classes['search-field']}>
          <LoupeIcon />
          <input type='text' value='Hamburg, DE' />
        </div>

        <div className={classes['search-field']}>
          <LoupeIcon />
          <input type='text' value='Asti, IT' />
        </div>
      </div>

      <div className={classes['sort-filters']}>
        <span>124 Loads</span>

        <div className={classes['sort-filters-buttons']}>
          <button>
            <SortIcon /> Sort
          </button>

          <button>
            <FiltersIcon /> Filters
          </button>
        </div>
      </div>

      <div className={classes.routes}>
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
      </div>

      <div className={classes['route-info']}>
        <RouteInfo />
      </div>

      <div className={classes.bottom}>
        <Button size='medium' variant='outlined'>
          Clear all
        </Button>

        <Button size='medium'>Compare Loads</Button>
      </div>
    </div>
  )
}
