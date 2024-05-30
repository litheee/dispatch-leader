import { FeaturePageLayout } from '@/layouts'

import warehouseImg from '@/assets/img/warehouse.png'

export const ShippersPage = () => {
  const features = [
    {
      title: 'Streamline Your Logistics',
      text: 'Enhance your shipping operations with our cutting-edge platform designed for efficiency and reliability. Gain access to a wide network of professional carriers with the capacity to handle shipments of any size. Our technology simplifies logistics management, enabling you to track and manage your shipments seamlessly from origin to destination.'
    },
    {
      title: 'Cost-Effective Solutions',
      text: 'Reduce your shipping costs  through our competitive pricing and access to a diverse carrier pool. Leverage our advanced algorithms to find the most economical shipping routes and options. Maximize your budget with our customized shipping solutions tailored to meet your specific needs.'
    },
    {
      title: 'Reliable and Timely Deliveries',
      text: 'Count on timely and reliable delivery  of your goods. Our network of vetted carriers ensures that your shipments are handled with care and professionalism. Experience peace of mind with our commitment to on-time delivery and excellent service quality.'
    },
    {
      title: 'Real-Time Tracking and Support',
      text: 'Stay updated with real-time tracking of your shipments and receive automated notifications at every step. Our platform provides transparency and control, allowing you to monitor your logistics operations closely. Benefit from our dedicated support team, ready to assist you with any inquiries or issues that arise.'
    },
    {
      title: 'Flexible Shipping Options',
      text: 'Enjoy flexible shipping solutions  that cater to your changing needs. Whether it’s expedited shipping, specialized handling, or international logistics, our platform adapts to your requirements. We provide a wide range of options to ensure that your shipping experience is as convenient and efficient as possible.'
    }
  ]

  return (
    <FeaturePageLayout
      title='Optimize Your Shipping Experience'
      image={warehouseImg}
      features={features}
      signUpTexts={{
        title: 'Ready to Enhance Your Shipping Strategy?',
        description:
          'and transform how you manage and execute your logistics. Join a platform that empowers you to streamline operations, reduce costs, and improve delivery reliability.'
      }}
    />
  )
}
