import { motion } from 'framer-motion';
import { useState } from 'react';

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ['item1', 'item2', 'item3', 'item4'];

  return (
    <div className="course">
      <motion.ul variants={variants} initial="hidden" animate="visible">
        {items.map((item, index) => {
          return (
            <motion.li variants={variants} key={item} custom={index}>
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
export default Test;

/* 
// TEST CSS
.course {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .box {
      width: 200px;
      height: 200px;
      background-color: white;
    }
  }
*/
