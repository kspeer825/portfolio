import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Box.module.scss'
import cn from 'classnames'

const Box: FunctionComponent<{
  children: ReactNode;
  corners?: 'round' | 'rounder' | 'roundest';
  color?: 'gray' | 'blue' | 'dark_gray' | 'light_gray' | 'transparent';
}> = ({ children, corners, color }) => {
  const classNames = cn({
    [styles.Box_normal]: true,
    [styles[`Box_${corners}`]]: corners,
    [styles[`Box_${color}`]]: color
  })

  return <div className={classNames}>{children}</div>
};

export default Box;
