import { FeaturePageLayout } from '@/layouts'

import trucksImg from '@/assets/img/trucks.png'

export const CarriersPage = () => {
  const features = [
    {
      title: 'Expand Your Business Reach',
      text: 'Unlock new opportunities by connecting with a vast clientele looking for reliable transportation solutions. Our platform offers enhanced exposure to help you grow your customer base and increase order frequency. Experience a significant boost in visibility and build a stellar market reputation.'
    },
    {
      title: 'Innovative Technology at Your Fingertips',
      text: 'Simplify your operations with our user-friendly online interface designed for efficient order tracking and management. Embrace automation to streamline your billing, documentation, and administrative tasks. Utilize our advanced tools for optimizing routes and reducing fuel costs, saving you time and money.'
    },
    {
      title: 'Attractive Financial Benefits',
      text: 'Never feel out of depth with our 24/7 support system ready to assist with any challenges. Benefit from our comprehensive educational resources, including workshops and seminars that cover the latest industry best practices. Stay ahead of the curve with continual learning and support.'
    },
    {
      title: 'Continuous Support and Learning',
      text: 'Enhance your earnings with our competitive and flexible pricing models. Achieve specific performance goals and enjoy bonuses that reflect your efficiency and dedication. Our transparent and prompt payment system ensures you get paid on time, every time.'
    },
    {
      title: 'A Community of Professionals',
      text: 'Connect with peers in our dedicated carrier network. Share insights, solve challenges collectively, and explore cooperative opportunities with other industry professionals. Participate in regular community meetings and events that foster a sense of unity and collaboration.'
    }
  ]

  return (
    <FeaturePageLayout
      title='Join Our Carrier Network'
      image={trucksImg}
      features={features}
      signUpTexts={{
        title: 'Ready to Drive Forward?',
        description:
          'and start navigating your path to greater success with us. Join a community dedicated to growth, efficiency, and connectivity.'
      }}
    />
  )
}
