import Container from '../Container';
import styles from './Header.module.css';
import PseudoButton from '../PseudoButton';
import Logo from '../Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <PseudoButton>Площадка 1</PseudoButton>
          <Logo />
        </div>
      </Container>
    </header>
  );
}
