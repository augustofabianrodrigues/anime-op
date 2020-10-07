import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './RegularSection.less';

interface RegularSectionProps {
  title: string;
  className?: string;
}

const RegularSection: FC<RegularSectionProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <Styled styles={styles}>
      <section className={classNames('synopsis regular-section', className)}>
        <h3 className="section-title">{title}</h3>
        {children}
      </section>
    </Styled>
  );
};

export default RegularSection;
