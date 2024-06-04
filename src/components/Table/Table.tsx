import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import cn from 'classnames'

import { Button } from '@/ui'

import classes from './Table.module.css'
import StarIcon from '@/assets/icons/star.svg?react'
import CrossIcon from '@/assets/icons/cross.svg?react'

type Item = {
  id: number
  pickUpDate: string
  rate: string
  rpkm: string
  company: string
  equipment: string
  oDh: string
  oCity: string
  oSt: string
  distance: string
  dCity: string
  dSt: string
  ddh: string
  length: string
  weight: string
  actions: string
  update: string
  trailerOptions: string
  bookItNow: string
}

export const Table = () => {
  const columnHelper = createColumnHelper<Item>()

  const data = [
    {
      id: 1,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 2,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 3,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 4,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 5,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 6,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 7,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    },
    {
      id: 8,
      pickUpDate: '16/04',
      rate: '€3000',
      rpkm: '€1.5',
      company: 'KTB GLOBAL LTD',
      equipment: 'F',
      oDh: '56',
      oCity: 'HAMBURG',
      oSt: 'IT',
      distance: '1523',
      dCity: 'ASTI',
      dSt: '250',
      ddh: '250',
      length: '12',
      weight: '22000',
      actions: '',
      update: '0.05',
      trailerOptions: 'ADR',
      bookItNow: ''
    }
  ]

  const columns = [
    columnHelper.accessor('pickUpDate', {
      header: 'Pick Up'
    }),
    columnHelper.accessor('rate', {
      header: 'Rate'
    }),
    columnHelper.accessor('rpkm', {
      header: 'RPKM'
    }),
    columnHelper.accessor('company', {
      header: 'Company'
    }),
    columnHelper.accessor('equipment', {
      header: 'Equipment'
    }),
    columnHelper.accessor('oDh', {
      header: 'O-DH'
    }),
    columnHelper.accessor('oCity', {
      header: 'O-City'
    }),
    columnHelper.accessor('oSt', {
      header: 'O-St'
    }),
    columnHelper.accessor('distance', {
      header: 'Distance'
    }),
    columnHelper.accessor('dCity', {
      header: 'D-City'
    }),
    columnHelper.accessor('dSt', {
      header: 'D-St'
    }),
    columnHelper.accessor('ddh', {
      header: 'D-DH'
    }),
    columnHelper.accessor('length', {
      header: 'Length'
    }),
    columnHelper.accessor('weight', {
      header: 'Weight'
    }),
    columnHelper.accessor('actions', {
      header: 'Actions',
      cell: () => (
        <div className={classes.actions}>
          <button>
            <StarIcon />
          </button>
          <button>
            <CrossIcon />
          </button>
        </div>
      )
    }),
    columnHelper.accessor('update', {
      header: 'Update'
    }),
    columnHelper.accessor('trailerOptions', {
      header: 'Trailer Options'
    }),
    columnHelper.accessor('bookItNow', {
      header: 'Book It Now',
      cell: () => <Button size='small'>Book It Now</Button>
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <table className={classes.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, idx, arr) => (
          <tr
            key={row.id}
            className={cn({
              [classes.active]: arr.length - 1 === idx
            })}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
