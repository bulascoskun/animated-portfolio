import { useState } from 'react';
import Links from './Links/Links';
import './Sidebar.scss';
import ToggleButton from './toggleButton/toggleButton';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {},
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
    },
  };

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
