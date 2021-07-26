import React from 'react';
import { cardContactList } from './card-contact-list.module.scss';

export default function CardContactList({ children }) {
  return <ul className={cardContactList}>{children}</ul>;
}
