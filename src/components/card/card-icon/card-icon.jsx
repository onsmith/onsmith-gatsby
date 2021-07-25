import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { indexCardIcon } from './card-icon.module.scss';

export default function CardIcon({ icon }) {
  return (
    <figure className={indexCardIcon}>
      <FontAwesomeIcon icon={icon} />
    </figure>
  );
}
