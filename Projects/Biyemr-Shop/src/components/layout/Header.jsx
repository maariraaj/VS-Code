import logo from '../../assets/img/logo.png';
import styles from './Header.module.css';
import CartButton from './CartButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['nav-items']}>
        <img src={logo} alt='logo biyemr' />
        <CartButton />
      </nav>
      <div className={styles.content}>
        <h2>The World's No.1 <span className={styles['text-color']}>Shopping</span> site</h2>
        <p>This is the subsidiary of <span className={styles['text-color']}>BIYEMR Inc.</span></p>
      </div>
    </header>
  )
}

export default Header