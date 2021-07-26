import React from 'react';
import { cardContactIcon } from './card-contact-list.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardContactListItem({ href, icon, children }) {
  return (
    <li className={cardContactIcon}>
      <a href={href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} />
        {children}
      </a>
    </li>
  );
}
