import { type PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Container.module.css';

type ContainerBaseProps = {
  className?: string;
};

type ContainerProps = PropsWithChildren<ContainerBaseProps>;

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
