import cn from 'classnames';
import styles from './Logo.module.css';

type LogoBaseProps = {
  className?: string;
};

export default function Container({ className }: LogoBaseProps) {
  return <span className={cn(styles.logo, className)}>Гип И</span>;
}
