import React from 'react';
import styles from './styles.module.scss';

interface CardProps {
  title?: string;
  description?: string;
  containerClassName?: string;
  descriptionClassName?: string;
}
export function Card({
  description,
  title,
  containerClassName,
  descriptionClassName,
}: CardProps) {
  return (
    <div className={`${styles.card__container} ${containerClassName}`}>
      <span>{title}</span>
      <span className={`${styles.description} ${descriptionClassName}`}>
        {description}
      </span>
    </div>
  );
}
