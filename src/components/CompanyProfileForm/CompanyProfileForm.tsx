import { Button, TextField, Textarea } from '@/ui'

import classes from './CompanyProfileForm.module.css'
import DocumentAttachmentIcon from '@/assets/icons/document-attachment.svg?react'
import InfoIcon from '@/assets/icons/info.svg?react'

export const CompanyProfileForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes['fields-grid']}>
        <TextField name='companyName' label='Company Name' />
        <TextField name='companyAddress' label='Company Address' />
        <TextField name='email' label='Email Address' />
        <TextField name='firstName' label='First Name' />
        <TextField name='lastName' label='Last Name' />
        <TextField name='title' label='Title' />
        <TextField name='vatNumber' label='VAT Number' endAdornment={<DocumentAttachmentIcon />} />
        <TextField name='phone' label='Phone Number' />
        <TextField name='daysToPay' label='Days To Pay' />
        <TextField
          name='licenseNumber'
          label='License Number'
          endAdornment={<DocumentAttachmentIcon />}
        />
        <TextField name='licenseNumberValidFrom' label='Valid From' />
        <TextField name='licenseNumberValidTo' label='Valid To' />
        <TextField
          name='insuranceNumber'
          label='Insurance Number'
          endAdornment={<DocumentAttachmentIcon />}
        />
        <TextField name='insuranceNumberValidFrom' label='Valid From' />
        <TextField name='insuranceNumberValidTo' label='Valid To' />
      </div>

      <Textarea
        className={classes['contract-details-field']}
        textareaClassName={classes['contract-details-textarea']}
        name='contractDetails'
        label='Add Contract Details'
        endAdornment={
          <div className={classes['textarea-end-adornment']}>
            <InfoIcon />
            <DocumentAttachmentIcon />
          </div>
        }
      />

      <Button type='submit' size='medium'>
        Update Profile
      </Button>
    </form>
  )
}
