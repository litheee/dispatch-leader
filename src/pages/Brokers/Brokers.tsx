import { FeaturePageLayout } from '@/layouts'

import officeImg from '@/assets/img/office.png'

export const BrokersPage = () => {
  const features = [
    {
      title: 'Expand Your Market Access',
      text: "Connect with a vast network of reputable carriers and a diverse clientele needing dependable logistics solutions. Our platform acts as a bridge to extensive market opportunities, enabling you to significantly broaden your reach and enhance your brokerage's visibility and credibility."
    },
    {
      title: 'Streamlined Operations',
      text: 'Effortlessly manage transactions with our advanced platform designed for efficiency and ease. Automate your workflow to reduce paperwork, simplify compliance, and expedite settlements. Our robust technology ensures that you can focus more on strategic tasks and less on manual processes.'
    },
    {
      title: 'Competitive Advantages',
      text: 'Stay ahead of the competition with real-time access to market trends and data analytics. Our tools help you make informed decisions quickly, offering you the agility to adapt to market demands and optimize your brokerage operations.'
    },
    {
      title: 'Secure and Reliable',
      text: 'Trust in our secure platform designed with the highest standards of data integrity and security. We understand the importance of safeguarding your information and transactions, providing you with peace of mind and reliability.'
    },
    {
      title: 'Community and Collaboration',
      text: 'Join a thriving community of brokers, carriers, and industry experts. Our platform fosters collaboration through networking events, online forums, and partnerships. Enhance your professional relationships and gain insights that can help you solve complex logistics challenges.'
    }
  ]

  return (
    <FeaturePageLayout
      title='Elevate Your Brokerage with Us'
      image={officeImg}
      features={features}
      signUpTexts={{
        title: 'Ready to Transform Your Brokerage?',
        description:
          'and start leveraging a platform that supports your growth and success. Discover new possibilities and tools that empower you to excel in the dynamic world of freight brokerage.'
      }}
    />
  )
}
