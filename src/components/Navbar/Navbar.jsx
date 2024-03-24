import { motion } from 'framer-motion';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span>
        <div className="social">
          <img src="/facebook.png" alt="facebook" />
          <img src="/instagram.png" alt="instagram" />
          <img src="/youtube.png" alt="youtube" />
          <img src="/dribbble.png" alt="dribbble" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
