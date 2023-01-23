import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss'
import cn from 'classnames'

const Grid: FunctionComponent<{
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spacing?: 'sm' | 'md' | 'lg';
}> = ({ children, container, item, cols, spacing }) => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${cols}`]]: cols,
    [styles[`Grid_spacing_${spacing}`]]: spacing
  });

  return <div className={classNames}>{children}</div>
};

export default Grid;
