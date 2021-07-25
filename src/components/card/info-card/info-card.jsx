import React from 'react';
import { cardBody } from './info-card.module.scss';

export default function InfoCard({ children }) {
  return <section className={cardBody}>{children}</section>;
}
