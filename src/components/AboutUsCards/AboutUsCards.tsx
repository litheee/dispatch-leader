import classes from './AboutUsCards.module.css'

export const AboutUsCards = () => {
  const aboutUsItems = [
    {
      label: 'Who We Are',
      text: 'We are a team of passionate innovators and creators dedicated to transforming the way businesses operate. With expertise spanning technology, design, and strategy, we pride ourselves on a collaborative culture that fosters creativity and innovation. Our multidisciplinary team is our greatest asset, bringing together diverse perspectives to solve complex challenges.'
    },
    {
      label: 'Our Mission',
      text: 'Our mission is to empower businesses through innovative solutions that streamline operations, enhance efficiency, and drive growth. We believe in leveraging technology to make a tangible difference in the world, ensuring our clients not only survive but thrive in an ever-evolving landscape. By focusing on sustainable and scalable solutions, we aim to contribute to a brighter future for businesses and communities alike.'
    },
    {
      label: 'Our Jorney',
      text: "Founded in 2010, our journey began in a small office with big dreams. Since then, we've faced our share of challenges and triumphs, growing from a humble startup to a leader in our field. Each milestone, from our first client to our latest innovation, has been a stepping stone towards achieving our mission. Our journey is a testament to our commitment, perseverance, and the trust placed in us by our clients and community "
    }
  ]

  return (
    <ul className={classes['about-us-cards']}>
      {aboutUsItems.map(({ label, text }) => {
        return (
          <li key={label}>
            <h3>{label}</h3>
            <p>{text}</p>
          </li>
        )
      })}
    </ul>
  )
}
