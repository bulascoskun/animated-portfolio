import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Portfolio.scss';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat ipsum mollitia maxime magnam perspiciatis corporis, error alias qui veniam aut quam tempora rerum sit dolorum optio accusamus odio voluptas.',
  },
  {
    id: 2,
    title: 'SkillWise',
    img: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat ipsum mollitia maxime magnam perspiciatis corporis, error alias qui veniam aut quam tempora rerum sit dolorum optio accusamus odio voluptas.',
  },
  {
    id: 3,
    title: 'Scrap Hero',
    img: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat ipsum mollitia maxime magnam perspiciatis corporis, error alias qui veniam aut quam tempora rerum sit dolorum optio accusamus odio voluptas.',
  },
  {
    id: 4,
    title: 'Birebir',
    img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat ipsum mollitia maxime magnam perspiciatis corporis, error alias qui veniam aut quam tempora rerum sit dolorum optio accusamus odio voluptas.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Portfolio;
