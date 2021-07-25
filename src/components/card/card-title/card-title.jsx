import React from 'react';
import { indexCardTitle } from './card-title.module.scss';

export default function CardTitle({ children }) {
  return <h2 className={indexCardTitle}>{children}</h2>;
}
