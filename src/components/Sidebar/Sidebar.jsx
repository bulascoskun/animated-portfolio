import { useState } from 'react';
import Links from './Links/Links';
import './Sidebar.scss';
import ToggleButton from './toggleButton/toggleButton';
import { motion } from 'framer-motion';

const variants = {
  open: {
    clipPath: 'circle(120vh at 50px 50px)',
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
