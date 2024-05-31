import { Button } from '@/ui'

import classes from './ContactsCards.module.css'
import LogoIcon from '@/assets/img/logo-icon.svg?react'

export const ContactsCards = () => {
  return (
    <ul className={classes['contacts-cards']}>
      <li>
        <h3>Customer Serivce</h3>

        <p>
          For any inquiries, support requests, or feedback, our dedicated customer service team is
          here to help. Connect with us for prompt assistance on products, services, or any other
          questions you might have.
        </p>

        <p>Phone: [Phone Number]</p>
        <p>Email: [Customer Service Email]</p>
        <p>Live Chat: Available on our website from 9 AM to 5 PM (Your Time Zone)</p>

        <div className={classes.buttons}>
          <Button size='medium'>Live Chat</Button>
          <Button size='medium'>Inquiry Form</Button>
        </div>

        <div className={classes['logo-bg']}>
          <LogoIcon width={309} height={420} />
        </div>
      </li>

      <li>
        <h3>Sales Inquiry</h3>

        <p>
          Interested in learning more about our products or services? Our sales team is ready to
          provide you with all the information you need to make an informed decision, including
          quotes and product demos.
        </p>

        <p>Phone: [Phone Number]</p>
        <p>Email: [Customer Service Email]</p>
        <p>
          Fill out our online form, and a sales representative will get back to you within 24 hours.
        </p>

        <div className={classes.buttons}>
          <Button size='medium'>Live Chat</Button>
          <Button size='medium'>Inquiry Form</Button>
        </div>

        <div className={classes['logo-bg']}>
          <LogoIcon width={309} height={420} />
        </div>
      </li>

      <li>
        <h3>Technical Support</h3>

        <p>
          Experiencing technical difficulties? Our expert technical support team is here to resolve
          any issues you're facing with our products or services, ensuring a smooth and hassle-free
          experience.
        </p>

        <p>24/7 Helpline: [Phone Number]</p>
        <p>FAQs Live Chat: Available on our website from 9 AM to 5 PM (Your Time Zone)</p>

        <div className={classes.buttons}>
          <Button size='medium'>Live Chat</Button>
          <Button size='medium'>Inquiry Form</Button>
        </div>

        <div className={classes['logo-bg']}>
          <LogoIcon width={309} height={420} />
        </div>
      </li>
    </ul>
  )
}
