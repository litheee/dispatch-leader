import { sanitizeForId } from '@/utils'
import { TabItemProps } from './Tabs.types'

import classes from './Tabs.module.css'

export const TabItem: React.FC<TabItemProps> = ({ label, children }) => (
  <div
    className={classes['tab-panel']}
    role='tabpanel'
    aria-labelledby={`tab-${sanitizeForId(label)}`}
    id={`panel-${sanitizeForId(label)}`}
  >
    {children}
  </div>
)
