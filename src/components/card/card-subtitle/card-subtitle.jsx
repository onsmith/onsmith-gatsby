import React from 'react';
import { indexCardSubtitle } from './card-subtitle.module.scss';

export default function CardSubtitle({ children }) {
  return <p className={indexCardSubtitle}>{children}</p>;
}
