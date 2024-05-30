import { ContactsCards } from '@/components'

import classes from './ContactUs.module.css'

export const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact us:</h1>

      <div className={classes.cards}>
        <ContactsCards />
      </div>
    </div>
  )
}
