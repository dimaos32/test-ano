import { type PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './PseudoButton.module.css';
import type { MaybeArray } from '../../types/MaybeArray';
import ensureArray from '../../utils/ensure-array';

type PseudoButtonBaseProps = {
  className?: string;
  mods?: MaybeArray<string>;
};

type PseudoButtonProps = PropsWithChildren<PseudoButtonBaseProps>;

export default function Container({
  children,
  className,
  mods,
}: PseudoButtonProps) {
  const modClasses = mods ? ensureArray(mods).map((mod) => styles[mod]) : [];

  return (
    <span className={cn(styles.btn, className, ...modClasses)}>{children}</span>
  );
}
