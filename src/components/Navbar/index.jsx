import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  )
};
