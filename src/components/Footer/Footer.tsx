import Container from '../Container';
import styles from './Footer.module.css';
import PseudoButton from '../PseudoButton';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <PseudoButton mods="accent">Оплачено</PseudoButton>
          <PseudoButton>Первичная сдача</PseudoButton>
          <PseudoButton>Задачи</PseudoButton>
        </div>
      </Container>
    </footer>
  );
}
