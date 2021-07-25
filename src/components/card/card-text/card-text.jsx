import React from 'react';
import { infoCardText } from './card-text.module.scss';

export default function CardText({ children }) {
  return <p className={infoCardText}>{children}</p>;
}
