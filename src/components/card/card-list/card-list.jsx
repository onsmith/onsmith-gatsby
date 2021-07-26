import React from 'react';
import { indexSectionList } from './card-list.module.scss';

export default function CardList({ children }) {
  return <ul className={indexSectionList}>{children}</ul>;
}
